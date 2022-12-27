FROM node:16

ENV NODE_ENV development

#add turborepo
# RUN yarn add turbo

# Set working directory
WORKDIR /usr/src/app

# Install app dependencies
COPY ["yarn.lock", "package.json", "./"]
COPY apps/web/package.json ./apps/web/package.json

# Copy source files
COPY . .

# Install app dependencies
RUN yarn install

EXPOSE 3000

CMD ["yarn", "dev"]