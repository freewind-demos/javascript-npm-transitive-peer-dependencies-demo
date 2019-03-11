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
