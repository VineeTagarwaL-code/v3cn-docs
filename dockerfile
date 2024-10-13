# Step 1: Build the app
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json ./
RUN npm install

# Copy the rest of the project files
COPY . .

# Build the Next.js app
RUN npm run build

# Step 2: Production image
FROM node:18-alpine AS runner

# Set working directory
WORKDIR /app

# Copy the build files from the builder stage
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/package.json ./
COPY --from=builder /app/public ./public

# Install only production dependencies (optional)
RUN npm install --only=production

# Expose the port that Next.js will run on
EXPOSE 3000

# Start the Next.js app
CMD ["npm", "run", "start"]
