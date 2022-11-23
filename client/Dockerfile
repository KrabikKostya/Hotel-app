FROM node:latest
ENV PORT=3000
WORKDIR /hotel-app
COPY ./package.json ./client/
COPY ./package-lock.json ./client/
WORKDIR /hotel-app/client/
RUN npm install
COPY . .
