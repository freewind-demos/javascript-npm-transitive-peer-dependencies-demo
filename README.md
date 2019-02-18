JavaScript Npm Peer Dependencies Demo
=====================================

当peerDependencies声明为`*`时，表示任意一个版本都可以，而不是指最新的版本。

所以当`core`下面声明：

```
"peerDependencies": {
  "lodash": "*"
}
```

在hello中，使用了旧版本的lodash时：

```
"lodash": "^3.10.1",
```

在hello下面运行`yarn`安装依赖不会有任何报错。

但是如果我们在core中，我们把`peerDependencies`中的`lodash`改为`^4.0.0`，再回到hello目录下，
再运行`yarn`安装（必须先删除`node_modules`），则会报警告：

```
warning " > ~core@0.1.0" has incorrect peer dependency "lodash@^4.0.0".
```

说明`*`指的是**任一**版本，而非**最新**版本。

## 运行

```
cd hello
yarn
yarn demo
```

注意：在这个demo中我们使用yarn而不是npm，是因为发现npm对于本地相对路径的module，处理其`peerDependencies`似乎有问题。
