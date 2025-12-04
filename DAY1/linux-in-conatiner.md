# Running a Node.js App Using Docker

## 1. Create Node.js App

* Initialize project: `npm init -y`
* Install dependencies: `npm install express`
* Create `server.js` with a basic Express server.

## 2. Create `.dockerignore`

```
node_modules
.env
.git
npm-debug.log
```

## 3. Create `Dockerfile`

```
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .
EXPOSE 3000
CMD ["node", "server.js"]
```

## 4. Build Image

```
docker build -t <Image-name> .
```

## 5. Run Container

```
docker run -p 3000:3000 <Image-name>
```


# Enter Container Shell

```
docker exec -it <container_name_or_id> /bin/sh
```
## Eploring various commands in Comntainer Shell

1) ls (Shows the files and folders in your current directory.)

    ![alt text](/DAY1/screenshots/image.png)

2) ps (Shows the currently running processes (programs) on your system.)

    ![alt text](/DAY1/screenshots/image-1.png)

3) top (Shows real-time resource usage: CPU, memory, running tasks.)

    ![alt text](/DAY1/screenshots/image-2.png)

4) df -h (Check overall disk usage -h means human-readable (MB/GB))

    ![alt text](/DAY1/screenshots/image-3.png)

5) docker logs <container_name>

    ![alt text](/DAY1/screenshots/image-4.png)

