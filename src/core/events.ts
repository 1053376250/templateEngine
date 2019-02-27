
//初始化事件代理
//如何让每个元素的事件和代理绑定在一起
//其实对于每个组件区分不同的生命周期，都初始化一套
export default function initEventMixin(TTT:Function){
    TTT.prototype.$on=function on(){

    }

    TTT.prototype.$off=function off(){

    }

    TTT.prototype.$emit=function emit(){

    }
}