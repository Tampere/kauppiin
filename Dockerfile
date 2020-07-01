
# FROM node:alpine as build
# WORKDIR /app
# ENV PATH /app/node_modules/.bin:$PATH
# COPY package.json ./
# COPY package-lock.json ./
# COPY public ./
# RUN npm ci --silent
# RUN npm install react-scripts@3.4.1 -g --silent
# COPY . ./
# RUN npm run build

# FROM nginx
# COPY --from=build /app/build /usr/share/nginx/html
# COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]

# testing node app docker
FROM node:alpine
EXPOSE 3000

RUN mkdir /opt/kauppiin

ADD ./package-lock.json /opt/kauppiin
ADD ./package.json /opt/kauppiin
ADD ./server.js /opt/kauppiin

RUN mkdir /opt/install
ADD ./ /opt/install
WORKDIR /opt/install

RUN npm ci
RUN npm run build --mode production

RUN cp -R ./build /opt/kauppiin/build
RUN cp -R ./node_modules /opt/kauppiin/node_modules

WORKDIR /opt/kauppiin

RUN rm -R -rf /opt/install

CMD npm run serve