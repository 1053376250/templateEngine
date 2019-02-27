import VNode from '../index'


//跨平台兼容 注入操作符和module

// export default function patch(nodeOps:any):Function{
// 	let {nodeOp,module}=nodeOps;
// }
//应该在何时触发patch操作？

// 初始化操作
// 初始化基本的事件操作
// 初始化数据observer
// 初始化生命周期钩子