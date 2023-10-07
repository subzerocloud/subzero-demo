# ---- Build Stage ----
FROM node:18 AS build-stage

# Set working directory
WORKDIR /app

# install sqlite3
RUN apt-get update && apt-get install -y sqlite3 

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# see the internal sqlite database
RUN cd ./db && sqlite3 app.db < init.sql

# Build the application
RUN npm run build

# ---- Runtime Stage ----
FROM node:18-slim AS runtime-stage
ENV NODE_ENV=production
ENV NODE_OPTIONS=--enable-source-maps
ENV PORT=3000

# REST module environment variables
ENV DB_URI=app.db
ENV DB_POOL_MAX=10
ENV DB_ANON_ROLE=anonymous
ENV DB_SCHEMAS=public

# Auth module environment variables
# ENV GOTRUE_JWT_SECRET=
ENV API_EXTERNAL_URL=https://demo.subzero.cloud/auth
ENV GOTRUE_SITE_URL=http://demo.subzero.cloud
ENV DATABASE_URL=app.db
ENV GOTRUE_JWT_EXP=3600
ENV DB_NAMESPACE=auth
ENV GOTRUE_DISABLE_SIGNUP=true
ENV GOTRUE_MAILER_AUTOCONFIRM=true
ENV GOTRUE_SMS_AUTOCONFIRM=false
ENV GOTRUE_JWT_DEFAULT_GROUP_NAME=authenticated


# Set working directory
WORKDIR /app

# kamal needs curl for healthchecks
RUN apt-get update && apt-get install -y curl

# Copy built app from the build stage
COPY --from=build-stage /app/dist ./dist
COPY --from=build-stage /app/package*.json ./
COPY --from=build-stage /app/db/app.db ./app.db


# Install production dependencies
RUN npm ci

# Expose port (e.g., 3000) if your app needs it
EXPOSE 3000

# Command to run the application
CMD ["node", "--enable-source-maps", "dist/server.js"]
