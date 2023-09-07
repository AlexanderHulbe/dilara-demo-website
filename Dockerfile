FROM node:18-alpine3.17 as build
WORKDIR /app
COPY . /app
RUN npm install --legacy-peer-deps
RUN npm run build

FROM ubuntu
RUN apt-get update
RUN apt-get install apache2 -y
RUN apt-get install apache2-utils  -y
RUN apt-get clean

COPY --from=build /app/dist /var/www/html/

ENV NODE_ENV=production

EXPOSE 80

CMD ["apache2ctl", "-D", "FOREGROUND"]