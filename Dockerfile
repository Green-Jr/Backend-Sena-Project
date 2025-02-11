# Imagen base de Node.js
FROM node:20

# Crear y definir el directorio de trabajo
WORKDIR /home/app

# Copiar package.json y pnpm-lock.yaml
COPY package*.json ./

# Instalar dependencias de npm y pm2 globalmente
RUN npm install -g pm2 && npm install --omit=dev

# 🔥 Recompilar bcrypt dentro del contenedor (soluciona errores de binding)
RUN npm rebuild bcrypt --build-from-source

# Copiar el resto del código de la aplicación
COPY . .

# Asegurar que los archivos tengan permisos correctos
RUN chown -R node:node /home/app
USER node

# Exponer el puerto que usa el backend
EXPOSE 2700

# Usar PM2 para ejecutar la app
CMD ["pm2-runtime", "src/infrastructure/index.js"]
