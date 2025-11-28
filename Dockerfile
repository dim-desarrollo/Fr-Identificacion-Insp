FROM node:18-alpine3.17 as build

WORKDIR /app

# Entorno que viene desde Jenkins
ARG APP_ENV=development

COPY package*.json ./
RUN npm install

COPY . .

# Copia el .env correcto según APP_ENV
RUN cp .env.${APP_ENV} .env

RUN npm run build

FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
