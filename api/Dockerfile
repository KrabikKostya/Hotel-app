FROM node:latest
ENV PORT=3000
WORKDIR /hotel-app
COPY ./package.json ./api/
COPY ./package-lock.json ./api/
WORKDIR /hotel-app/api/
RUN npm install
COPY . .
