FROM node:8.10.0

WORKDIR /usr/src/manager

COPY ./ ./

RUN npm install expo-cli --global --allow-root
RUN npm install

CMD ["/bin/bash"]