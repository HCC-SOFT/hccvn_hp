FROM nginx:alpine

# Copy tất cả static files vào thư mục html của nginx
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]

