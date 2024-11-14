# Dockerfile

# Sử dụng Node.js phiên bản LTS
FROM node:18-alpine

# Tạo và chuyển đến thư mục làm việc của ứng dụng
WORKDIR /app

# Copy file package.json và package-lock.json vào container và cài đặt các dependencies
COPY package*.json ./
RUN npm install
RUN npm install bcrypt

# Copy toàn bộ mã nguồn vào thư mục làm việc
COPY . .

# Biến môi trường PORT, có thể thay đổi nếu cần
ENV PORT 3000

# Mở cổng mà ứng dụng sẽ chạy
EXPOSE 3000

# Chạy lệnh để khởi động ứng dụng NestJS
CMD ["npm", "run", "start:prod"]
