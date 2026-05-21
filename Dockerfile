FROM node:latest
WORKDIR /app
copy package.*json .
RUN npm install
COPY . .
EXPOSE 3000
ENTRYPOINT ['node', 'index.js']