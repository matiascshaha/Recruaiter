import Fastify from 'fastify';
import cors from '@fastify/cors';
import rateLimit from '@fastify/rate-limit';
import swagger from '@fastify/swagger';
import swaggerUI from '@fastify/swagger-ui';
import { Server } from 'socket.io';
import { Queue } from 'bullmq';
import { fastifyTRPCPlugin } from '@trpc/server/adapters/fastify';
import { appRouter } from './trpc/router';
import { createContext } from './trpc/context';
import { getEnv } from './env';
import { healthRoutes } from './routes/health';
import IORedis from 'ioredis';

const env = getEnv();

async function bootstrap() {
  const app = Fastify({ logger: true });

  await app.register(cors, { origin: env.CORS_ORIGIN, credentials: true });
  await app.register(rateLimit, { max: 1000, timeWindow: '1 minute' });

  await app.register(swagger, {
    openapi: {
      info: { title: 'Recruaiter API', version: '0.1.0' },
    },
  });
  await app.register(swaggerUI, { routePrefix: '/docs' });
  app.get('/openapi.json', async () => app.swagger());

  // tRPC
  await app.register(fastifyTRPCPlugin, { prefix: '/trpc', trpcOptions: { router: appRouter, createContext } });

  await app.register(healthRoutes);

  const server = await app.listen({ port: env.PORT, host: '0.0.0.0' });
  app.log.info(`🚀 API listening on ${server}`);

  // Socket.io
  const io = new Server(app.server, {
    cors: { origin: env.CORS_ORIGIN, credentials: true },
  });
  io.on('connection', (socket) => {
    socket.emit('hello', { message: 'Welcome to Recruaiter RTM' });
  });

  // Redis / BullMQ queues
  const connection = new IORedis(env.REDIS_URL);
  const outreachQueue = new Queue('outreach', { connection });

  void outreachQueue; // placeholder until jobs are implemented
}

bootstrap().catch((err) => {
  // eslint-disable-next-line no-console
  console.error(err);
  process.exit(1);
});

