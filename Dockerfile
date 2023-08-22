ARG NODE_VERSION=20

FROM node:${NODE_VERSION}-slim as base

ARG PORT=3000
ENV NODE_ENV=production

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

WORKDIR /app

# Build
FROM base as build
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
# RUN pnpm fetch
# COPY . .
RUN pnpm install 

COPY . .

RUN rm vite.config.ts

RUN pnpm build
RUN ls -la /app

# Run
FROM base
WORKDIR /app

ENV PORT=$PORT

COPY --from=build /app/.output /app/.output
# Optional, only needed if you rely on unbundled dependencies
# COPY --from=build /src/node_modules /src/node_modules

CMD [ "node", ".output/server/index.mjs" ]