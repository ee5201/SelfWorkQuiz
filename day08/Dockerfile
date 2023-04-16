FROM node:14

WORKDIR /Folder/
COPY ./package.json /Folder
COPY ./yarn.lock /Folder
RUN yarn install

COPY . /Folder/

CMD yarn dev