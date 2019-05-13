# Hoshino


#server 
npm install
#client
npm install -g gulp
cd client
npm install


gulp build
gulp watch

npm start
npm run dev

http://47.92.196.208:81/swagger/index.html


#部署
#端口在process-lts.yml文件：HTTP_PORT: 8010
#第一次流程
1、安装node
2、安装npm
3、上次文件目录
4、安装pm2，命令：npm install pm2 -g
5、进入上传文件目录，命令：cd /home/workspace/星河
6、安装依赖包，命令：npm install
7、进入client目录：命令：cd client
8、安装依赖包构建静态文件，命令：npm install、npm install -g gulp、gulp build
9、进入上传文件目录，命令：cd ..，运行下面的命令
pm2 start process-lts.yml --update-env
#第N次，在没有新的依赖包的情况
1、进入上传文件目录，命令：cd /home/workspace/星河/client
2、构建gulp build
3、进入上传文件目录，命令：cd ..，运行下面的命令
pm2 stop xingye-web-lts
pm2 delete xingye-web-lts
pm2 start process-lts.yml --update-env
