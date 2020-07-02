const CONF = {
    "apps": {
        "name": "pm2-test-server", // 进程名
        "script": "index.js", // 执行的脚本文件
        "watch": true, // 是否观察文件变化以重启服务
        "ignore_watch": [
            "node_modules",
            "logs"
        ], // 观察文件变化时忽略哪些文件内容
        "instances": 4, // 设置4个进程，在列表里会添加四个服务，也会生成四个日志，pm2会找空闲的进程来处理任务
        "error_file": "logs/error.log", // 错误日志打印地址
        "out_file": "logs/out.log", // 一般日志打印地址
        "log_date_format": "YYYY-MM-DD HH:mm:ss" // 在打印日志的时候添加时间，可设置时间显示的格式
    }
}