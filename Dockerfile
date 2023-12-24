
FROM node:18


WORKDIR /app


COPY package*.json ./


RUN npm install --legacy-peer-deps

RUN npm run build

COPY . .


EXPOSE 3000

# Command to run the application
CMD ["npm", "run", "dev"]
