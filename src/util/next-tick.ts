
let callBacks: Array<Function> = [];
let pending = false;
/**
 * 加入到事件循环
 * 注册回调的时候
 * @export
 * @param {Function} [cb]
 * @param {*} [ctx]
 */
export default function nextTick(cb?: Function, ctx?: any) {
    if (typeof cb == 'function'){
        callBacks.push(function () {
            if (ctx) {
                cb.call(ctx)
            } else {
                cb();
            }
        })
    }
    if(!pending){
        pending=true;
        timeFunc();
    }
}
function timeFunc() {
    let p = Promise.resolve();
    p.then(() => {
        callBacks.forEach((item) => {
            item();
        })
        callBacks=[];
        pending=false;
    })
}