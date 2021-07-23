# Stage 1 Build react app
FROM node:14-alpine AS client-builder

WORKDIR /app
COPY ./client/package.json .
COPY ./client/yarn.lock .
RUN cd client && yarn install

COPY . .
RUN cd client && yarn run build

# Stage 2: Build and servee express app
FROM node:14-alpine AS server-builder

WORKDIR /app
COPY ./server/package.json .
COPY ./server/yarn.lock .
RUN cd server && yarn install

COPY . .
RUN cd server && yarn build

# Copy just the clioent build artifacts from the previous stage.
COPY --from=client-builder /app/client/build ./client/build

ENTRYPOINT [ "node", "server/build/index.js" ]

