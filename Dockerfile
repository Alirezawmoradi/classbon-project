# Stage 1 : Build Stage
FROM node:20-slim as builder

# Set working directory
WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
# COPY pnpm-lock.yaml ./ # Uncomment if using pnpm
RUN npm install

COPY . .

# Build the Next.js application
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]