taro2 是一个重编译时，轻运行时的一个框架
绑定的是react 的DSL，可以通过react的语法来写小程序

编译时：通过babel 将 类react的代码转为小程序原生的语法
运行时：主要处理生命周期，事件，setData 等，运行时和react 并没有关系


编译时：将render function ,jsx => 静态的template ｜ taro 是采用穷尽的方式，对jsx 进行适配，适配工作量特别大

taro3: 重运行时的框架，和kbone适配原理类似，taro3的taro-runtime, 自行实现了一套DOM/BOM API

taro3 没有强DSL 限制，React/Vue都可以写

优缺点：
没有DSL的限制，可以写react/vue，运行在小程序上，无缝衔接
性能不如静态模版好
初始化性能，需要setData 传递全量模版渲染数据，性能较差。视图更新的性能完全取决

编译时优化：
运行时优化
没办法优化vue/react的run time,只能是优化taro dom tree(build/update)的性能,setData

自己实现了一套DOM/BOM API(不到1000行代码), 相对于jsDom(在NodeJs上实现了一套web标准的dom/bom api)，这个仓库在压缩前，代码有2.1M.taro3更轻量，优化了taro dom tree 的性能，优化了setData的性能，优化了事件性能

setData更新级别是Dom 级别，区别于Data级别的更新，并不是所有的Data 更新都会引起Dom的更新，Data的粒度，实际上有时候是冗余的
Taro Dom tree的path 进行压缩，这点多少有点性能提升

Taro 是基于组件的Template渲染的，不会像原生的，一直堆叠。减少了包的size, 就提高了性能？只是将编译时放到了运行时




