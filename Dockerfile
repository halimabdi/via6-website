FROM node:20-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json ./
RUN npm install

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Accept build arguments for public environment variables
ARG NEXT_PUBLIC_SITE_URL
ARG NEXT_PUBLIC_N8N_WEBHOOK
ARG NEXT_PUBLIC_CAL_URL
ARG NEXT_PUBLIC_CHATWOOT_URL
ARG NEXT_PUBLIC_CHATWOOT_TOKEN
ARG NEXT_PUBLIC_UMAMI_URL
ARG NEXT_PUBLIC_UMAMI_WEBSITE_ID
ARG NEXT_PUBLIC_PHONE_NUMBER

# Make them available as environment variables during build
ENV NEXT_PUBLIC_SITE_URL=$NEXT_PUBLIC_SITE_URL
ENV NEXT_PUBLIC_N8N_WEBHOOK=$NEXT_PUBLIC_N8N_WEBHOOK
ENV NEXT_PUBLIC_CAL_URL=$NEXT_PUBLIC_CAL_URL
ENV NEXT_PUBLIC_CHATWOOT_URL=$NEXT_PUBLIC_CHATWOOT_URL
ENV NEXT_PUBLIC_CHATWOOT_TOKEN=$NEXT_PUBLIC_CHATWOOT_TOKEN
ENV NEXT_PUBLIC_UMAMI_URL=$NEXT_PUBLIC_UMAMI_URL
ENV NEXT_PUBLIC_UMAMI_WEBSITE_ID=$NEXT_PUBLIC_UMAMI_WEBSITE_ID
ENV NEXT_PUBLIC_PHONE_NUMBER=$NEXT_PUBLIC_PHONE_NUMBER
ENV NEXT_TELEMETRY_DISABLED=1

RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Install curl for healthcheck
RUN apk add --no-cache curl

COPY --from=builder /app/public ./public

RUN mkdir .next
RUN chown nextjs:nodejs .next

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
