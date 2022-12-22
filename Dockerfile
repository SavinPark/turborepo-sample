FROM node:16-alpine

# 디렉토리 지정
WORKDIR /usr/src/app

# 의존성 설치를 위해 package.json, yarn.lock 복사
COPY package.json ./
COPY yarn.lock ./

# Copy the docs package.json
COPY apps/docs/package.json ./apps/docs/package.json

# 의존성 설치
RUN yarn 

# 필요한 모든 파일을 복사
COPY . .

# next.js 앱 빌드
RUN yarn build

# 컨테이너 포트 
EXPOSE 3000

# 애플리케이션 실행
CMD [ "yarn", "start" ]