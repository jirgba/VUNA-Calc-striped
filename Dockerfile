FROM nginx:alpine
COPY index.html /usr/share/nginx/html/
COPY assets/ /usr/share/nginx/html/assets/
COPY calculator/ /usr/share/nginx/html/calculator/
EXPOSE 80