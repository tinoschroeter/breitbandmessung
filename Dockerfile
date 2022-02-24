FROM node:16-alpine AS builder

RUN apk add --no-cache git curl make gcc g++ python3

WORKDIR /build

COPY . .

RUN npm install

FROM node:16-alpine AS speedtest-exporter

WORKDIR /app
COPY --from=builder /build .

CMD [ "node", "index.js" ]
