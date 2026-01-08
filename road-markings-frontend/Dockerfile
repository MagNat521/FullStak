# Этап сборки
FROM node:22-alpine AS build

WORKDIR /app

# Копируем только package.json и package-lock.json,
# если у тебя нет pnpm/yarn, не надо пытаться копировать их
COPY package.json package-lock.json ./

RUN npm install

# Копируем остальной код проекта
COPY . .

# Собираем production-версию
RUN npm run build

# Этап отдачи статики
FROM nginx:alpine

# Кладём билд Vite в стандартную директорию nginx
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
