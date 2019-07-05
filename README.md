JavaScript Npm Transitive Peer Dependencies Demo
================================================

当一个package以`devDependencies`的形式使用了另一个package时，通常也需要把另一个package同时也声明为
`peerDependencies`，这样当最终的app使用了某个package时，所有的`peerDependencies`都会提示安装，
当它们被安装时，它们自己声明的`peerDependencies`也会被提醒，这样就不会漏掉了。

本Demo演示了这个过程。其中`package1`和`package2`都以`npm publish`的形式发布到了npmjs上了。

```
npm install
npm run demo
```

注意：

这里有一个疑问，就是package2中以`devDependencies`的方式使用了`package1`中的`peerDependencies`->`lodash`，
那么`package2`是否也需要将`lodash`声明为`peerDependencies`？

答案是不用。因为安装`package2`就需要安装`package1`，自然就提示需要安装`lodash`了。
