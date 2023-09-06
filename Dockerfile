FROM node:18-alpine
WORKDIR /frontend

COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN npm i --legacy-peer-deps

COPY . ./

RUN npm run build

EXPOSE 5173

ENV PORT 5173

ENV NODE_ENV=production


ENTRYPOINT npm run dev