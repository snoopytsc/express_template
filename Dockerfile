FROM node:10.5.0
EXPOSE 8080
COPY ./backend/service/fileService.js .
CMD node start
