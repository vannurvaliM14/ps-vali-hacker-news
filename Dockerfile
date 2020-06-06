FROM node:12.7.0
WORKDIR /hacker-news
COPY . /hacker-news
RUN npm install 
RUN npm run build
CMD npm run ssr
EXPOSE 8000