FROM hub.agcs.agetic.gob.bo/dockerhub-proxy/library/node:16 AS build
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app

COPY --chown=node:node . .

USER node
RUN npm set registry https://registry.agcs.agetic.gob.bo/
RUN npm set strict-ssl false

# ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1
ENV NEXT_SHARP_PATH /home/node/app/node_modules/sharp

RUN npm ci
RUN npm run build 

FROM hub.agcs.agetic.gob.bo/dockerhub-proxy/library/node:16-alpine AS release
RUN mkdir -p /home/node/app/node_modules && mkdir -p /home/node/app/dist  && chown -R node:node /home/node/app
WORKDIR /home/node/app

COPY --chown=node:node ./public ./public
COPY --chown=node:node ./package.json ./package.json

COPY --chown=node:node ./next.config.js ./next.config.js
COPY --chown=node:node ./next-env.d.ts ./next-env.d.ts

COPY --from=build --chown=node:node /home/node/app/.next/standalone ./
COPY --from=build --chown=node:node /home/node/app/.next/static ./.next/static

USER node
ARG CI_COMMIT_SHORT_SHA
ARG CI_COMMIT_MESSAGE
ARG CI_COMMIT_REF_NAME
ENV CI_COMMIT_SHORT_SHA=${CI_COMMIT_SHORT_SHA} \
    CI_COMMIT_MESSAGE=${CI_COMMIT_MESSAGE} \
    CI_COMMIT_REF_NAME=${CI_COMMIT_REF_NAME}


CMD  ["sh", "-c",  "NODE_ENV=production node server.js"]
EXPOSE 3000