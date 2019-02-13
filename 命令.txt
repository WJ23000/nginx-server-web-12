一、基础命令

1.进入到nginx目录（e:/nginx-server-web-12），使用start nginx启动nginx

2.浏览器地址栏输入：127.0.0.1查看是否启动成功，默认80端口

3.nginx -s stop                  //停止nginx

  nginx -s reload                //重新加载nginx

  nginx -s quit                  //退出nginx
  
  
二、搭建本地web服务器

1.将本地打包的web项目放在nginx-server-web-12/html文件夹下

2.浏览器打开http://127.0.0.1/vue-vant-shop/dist/index.html

