FROM node:20-alpine AS deps
WORKDIR /app
COPY package.json pnpm-lock.yaml* pnpm-workspace.yaml turbo.json ./
COPY packages ./packages
COPY apps/api ./apps/api
RUN corepack enable && pnpm i --filter api --filter @recruaiter/database --filter @recruaiter/types --shamefully-hoist

FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app /app
RUN pnpm --filter api build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/apps/api/dist ./dist
COPY apps/api/package.json ./package.json
EXPOSE 4000
CMD ["node", "dist/index.js"]

