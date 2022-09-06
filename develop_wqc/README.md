# 智能决策系统

## 技术架构

- 前端：渐进式框架 [Vue](https://github.com/vuejs/vue)
- 后端：微框架 [Flask](https://github.com/pallets/flask)。

## 使用方法

1. 安装环境依赖，本项目需要 Node 环境和 Python 环境，如果对这部分不熟悉的看本文档最后的参考文章。

   > 注意：版本要求 Node version 12+, Python version 3.6+ 。

    ```bash
    # 前端环境依赖安装
    cd front
    npm install
    
    # 后端环境依赖安装
    cd back
    virtualenv venv
    source venv/bin/activate
    pip install -r requirements.txt
    ```

2. 打开两个终端，分别启动前端和后端。

    ```bash
    # 启动前端
    cd front
    npm run dev
    
    # 启动后端
    cd back
    source venv/bin/activate
    python app.py
    ```

3. 在浏览器中打开：`http://localhost:3000/` 即可预览。


## 项目结构

```
.
├── front # 前端
│    ├── package.json       # 前端依赖
│    ├── package-lock.json
│    ├── public
│    ├── src
│    │    ├── App.vue       # 主页面
│    │    ├── components    # 子组件
│    │    │    └── HelloWorld.vue
│    │    ├── assets        # 静态资源
│    │    └── main.js
│    └── vite.config.js
├── back # 后端
│    ├── app
│    │    ├── models        # 数据库对象
│    │    ├── resources     # API资源
│    │    ├── routes        # API设置
│    ├── db                 # 存放sqlite数据库
│    ├── test               # 测试代码
│    ├── vene               # 虚拟环境
│    ├── run.py             # flask manage, 用与启动程序
│    ├── config.py          # 存放常量
│    └── requirements.txt # 后端依赖
├── README.md
├── LICENSE
└── .gitignore
```

## 许可

[![](https://award.dovolopor.com?lt=License&rt=MIT&rbc=green)](./LICENSE)

## 参考

- [Vue3 教程](https://v3.cn.vuejs.org/)
- [Vite 官方中文文档](https://cn.vitejs.dev/guide/why.html)
- [Flask 官方文档](https://flask.palletsprojects.com/en/1.1.x/)
- [如何安装 Node 开发环境？](https://www.v2ai.cn/2018/11/11/linux/7-node-install/)
- [如何安装 Python 开发环境？](https://www.v2ai.cn/2018/04/29/python/2-python-install/)
