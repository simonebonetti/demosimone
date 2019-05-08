FROM node:8.11.3
LABEL author="Roberto Pozzi"
WORKDIR "/app"
# Install app dependencies
COPY package.json /app/
RUN cd /app; npm install; npm prune --production
# Bundle app source
COPY app.js /app
ADD public /app/public
EXPOSE 8082
CMD ["npm", "start"]