## My Portfolio: Next | TypeScript

#### Live: [https://javascriptforeverything.vercel.app/](https://javascriptforeverything.vercel.app/)


#### To Test On your Development machine

- Make sure `node` is installed  [ $ `node -v` 	indicate installed or not  ]
- Make sure `yarn` is installed  [ $ `yarn -v` 	indicate installed or not  ]
- Run Bellow commands



##### Normal Way 
```bash
$ git clone https://github.com/javaScriptForEverything/portfolio
$ yarn install
$ yarn dev
```

##### Docker Container 
```bash
$ docker build -t nextjs-portfolio .                                    # Build Docker image from Dockerfile
$ docker run -d --name portfolio -p 3000:3000 nextjs-portfolio          # Run Container

$ docker container logs -f portfolio 			                # See container's logs
$ docker container rm -f portfolio                                      # Stop container
```

##### Docker (Single Stage)

###### Dockerfile
```
FROM node:lts-alpine

USER node
WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY ./ ./

RUN yarn build

EXPOSE 3000
ENTRYPOINT [ "yarn", "start" ]
```


```bash
$ docker compose up -d                                                  # Build image + Up container
$ docker compose logs -f nextjs-portfolio 			        # See container's logs
$ docker compose down                                                   # Stop container

$ docker image ls                       # => 2.7 GB                     # See images
```

- Test on Browser: [http://localhost:3000](http://localhost:3000)


##### Docker (Multi Stage)

###### Dockerfile
```bash
# Stage 1: Build the Next.js application
FROM node:lts-alpine AS builder
USER node
WORKDIR /app
COPY package.json yarn.lock* ./
RUN yarn --frozen-lockfile; 
COPY . .
RUN yarn build



# Stage 2: Production runtime
FROM node:lts-alpine AS runner
USER node
WORKDIR /app
ENV NODE_ENV=production
COPY package.json yarn.lock* ./
RUN yarn install --frozen-lockfile --production 

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/next.config.js ./
EXPOSE 3000
CMD ["yarn", "start"]
```


###### docker-compose.yaml
```bash

services:
  nextjs-portfolio:
    build:
      context: .
      dockerfile: Dockerfile
    container_name: portfolio-container
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      # Add other environment variables here if needed
      # - NEXT_PUBLIC_API_URL=https://api.example.com
    volumes:
      - ./public:/app/public:ro
      # Uncomment if you need hot-reload in development:
      # - .:/app
      # - /app/node_modules
    restart: unless-stopped
    networks:
      - portfolio-network

  # Uncomment if you need a reverse proxy like Nginx
  # nginx:
  #   image: nginx:alpine
  #   ports:
  #     - "80:80"
  #   volumes:
  #     - ./nginx.conf:/etc/nginx/conf.d/default.conf
  #     - ./public:/usr/share/nginx/html:ro
  #   depends_on:
  #     - nextjs-portfolio
  #   networks:
  #     - portfolio-network

networks:
  portfolio-network:
    driver: bridge
```

```bash
$ docker compose up -d                                                  # Build image + Up container
$ docker compose logs -f nextjs-portfolio 			        # See container's logs
$ docker compose down                                                   # Stop container

$ docker image ls                       # => 2.7 GB                     # See images
```

- Test on Browser: [http://localhost:3000](http://localhost:3000)

