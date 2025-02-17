# Use a stable Node.js image
FROM node:18-buster

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json first (better caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project
COPY . .

# Build the Next.js app
RUN npm run build

# Expose the port for Fly.io
EXPOSE 3000

# Start the application
CMD ["npm", "run", "start"]
