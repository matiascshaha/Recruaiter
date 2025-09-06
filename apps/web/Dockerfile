FROM node:20-alpine AS deps
WORKDIR /app
COPY package.json pnpm-lock.yaml* pnpm-workspace.yaml turbo.json ./
COPY packages ./packages
COPY apps/web ./apps/web
RUN corepack enable && pnpm i --filter web --filter @recruaiter/ui --filter @recruaiter/types --shamefully-hoist

FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app /app
RUN pnpm --filter web build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/apps/web/.next ./.next
COPY apps/web/package.json ./package.json
EXPOSE 3000
CMD ["node", ".next/standalone/server.js"]

