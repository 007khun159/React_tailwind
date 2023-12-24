FROM node:17-alpine

WORKDIR /app

COPY package.json .

RUN npm install --legacy-peer-deps

COPY . .


# Command to run the application when the container starts
CMD ["npm", "run", "dev"]
