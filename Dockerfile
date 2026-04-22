FROM mcr.microsoft.com/playwright:v1.58.2-jammy

WORKDIR /app

# Копируем package.json сначала для лучшего кеширования
COPY package*.json ./

# Устанавливаем зависимости
RUN npm ci

# Копируем весь код
COPY . .

# Запускаем тесты
RUN npm t

CMD ["npm", "run", "test"]