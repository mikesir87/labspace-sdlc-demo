FROM node:22-slim AS base
WORKDIR /usr/local/app
COPY package*.json ./
EXPOSE 3000

FROM base AS dev
RUN npm install
COPY ./src ./src
CMD ["npm", "run", "dev"]

FROM base AS prod
RUN npm install --only=production
COPY ./src ./src
CMD ["node", "src/index.js"]
