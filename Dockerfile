FROM node

WORKDIR /

COPY . /src

RUN npm update

RUN npm install


EXPOSE 3000

CMD ["npm", "run dev"]