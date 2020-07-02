pm2 命令：
pm2 list 查看pm2运行的进程列表
pm2 start app.js/pm2 start pm2.conf.json 运行脚本，也可以运行配置文件
pm2 restart <appname>/<id> 重启进程
pm2 stop <appname>/<id> 停止进程
pm2 delete <appname>/<id> 删除进程
pm2 info <appname>/<id> 查看进程信息
pm2 log <appname>/<id> 查看日志打印
pm2 monit 进入server管理界面，可调试页面、查看内存占用信息等

