
//传入新老node
function patch(vNode: VNode,oldNode:VNode, isRoot: Boolean): void {
	//当vnode渲染时候从data中获取数据的时候进行添加vnode更改的依赖，当数据改变的时候将数据改变压入到队列中去，等待一个事件循环周期调用执行循环玩了再patch
	
}