FROM node:10.5.0
WORKDIR /usr/src/app
EXPOSE 6010
COPY ./backend/service/fileService.js .
CMD [ "npm", "start" ]
