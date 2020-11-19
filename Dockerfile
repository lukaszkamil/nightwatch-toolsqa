FROM node:12-slim AS gsutil
WORKDIR /tmp

### INSTALL CHROME ###
RUN apt update 
RUN apt install -y -qq libnss3-dev wget curl
RUN wget -q https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb \
    && apt install -y ./google-chrome-stable_current_amd64.deb \
    && rm ./google-chrome-stable_current_amd64.deb

### INSTALL GSUTIL ###
RUN wget -q -O gsutil.tar.gz https://storage.googleapis.com/pub/gsutil.tar.gz \
 && tar xfz gsutil.tar.gz -C $HOME \
 && rm gsutil.tar.gz
FROM gsutil AS node_modules

WORKDIR /tests

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm i
FROM node_modules AS final_build
COPY . .

