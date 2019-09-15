FROM node
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app/
RUN npm install
COPY . /app
EXPOSE 3001
CMD [ "npm", "run", "dev" ]
# CMD ["npm", "run", "start"]