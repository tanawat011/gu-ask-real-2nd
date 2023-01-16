FROM node:16-alpine as builder

ARG NODE_ENV
ARG SKIP_PREFLIGHT_CHECK=true

WORKDIR /home/node/app

COPY . .

RUN yarn install --force

RUN yarn build
RUN ls -la

# SERVE WITH NGINX
FROM nginx:1.18-alpine as final

COPY scripts/docker_entrypoint.sh .

COPY --from=builder /home/node/app/nginx/default.conf /etc/nginx/conf.d
COPY --from=builder /home/node/app/build /usr/share/nginx/html

RUN ls -la

RUN echo $(date -Iseconds) > VERSION.txt

RUN chmod +x docker_entrypoint.sh

CMD envsubst </usr/share/nginx/html/template-config.js >/usr/share/nginx/html/config.js \
    && cat /usr/share/nginx/html/config.js \
    && nginx -g 'daemon off;'

EXPOSE 80
