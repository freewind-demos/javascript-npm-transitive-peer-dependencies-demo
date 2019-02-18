JavaScript Npm Peer Dependencies "*" Demo
=========================================

当peerDependencies声明为`*`时，表示任意一个版本都可以，而不是指最新的版本。

比如在本demo中，在package.json中声明了：

```
"peerDependencies": {
  "lodash": "*"
}
```

同时在`dependencies`中使用了旧版本的lodash:

```
"lodash": "3.10.1",
```

（注：当前最新版本为`4.17.11`）

然后执行：

```
npm install
```

不会有相关的警告。
