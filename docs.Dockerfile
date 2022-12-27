FROM node:16

ENV NODE_ENV development

#add turborepo
# RUN yarn add turbo

# Set working directory
WORKDIR /usr/src/app

# Install app dependencies
COPY ["yarn.lock", "package.json", "./"]
COPY apps/docs/package.json ./apps/docs/package.json

# Copy source files
COPY . .

# Install app dependencies
RUN yarn install

EXPOSE 3001

CMD ["yarn", "dev"]