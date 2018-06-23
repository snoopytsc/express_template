FROM node:10.5.0
EXPOSE 6010
COPY ./backend/service/fileService.js .
CMD npm start
