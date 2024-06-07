FROM oven/bun

WORKDIR /app

COPY --from=node:18 /usr/local/bin/node /usr/local/bin/node
# Copy the lock and package file
COPY package.json . 

# Install dependencies
RUN bun install


COPY src/ ./src/

EXPOSE 3000

CMD ["bun", "src/index.ts"]