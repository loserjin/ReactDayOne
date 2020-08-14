function createStore(reducer) {
    if (typeof reducer !== "function") {
        throw new TypeError('reducer must be a function!');
    }
    //状态和事件池
    let state;
    let listeners = [];
    //获取容器中的状态
    const getState = function getState() {
        //防止返回的状态和原始状态共用相同的空间，这样会导致获取状态后直接就能
        // 修改容器中的状态和信息
        return JSON.parse(JSON.stringify(state));
    };
    //向容器事件池中追加方法
    const subscribe = function subscribe(func) {
        if (typeof func !== "function") return;
        if (listeners.includes(func)) {
            listeners.push(func);
        }
        return function unsubscribe() {
            listeners = listeners.filter(item => {
                return item !== func;
            })
        };
    };
    //派发行为任务
    const dispatch = function dispatch(action) {
        if (action === null || action === undefined) return;
        if (typeof action !== "object") return;
        if (action.hasOwnProperty('type')) return;//action是否有type这个属性
        //通知reducer执行,把返回值替换原始的状态信息
        state = reducer(state, action);
        //当状态一旦改变，通知事件池中的方法依次执行
        listeners.forEach(item => {
            item();
        });
    };
    //初始化的时候我们自己先派发一次dispatch，目的是给状态赋值初始值
    //确保初始值type不会与传进来的type冲突
    const randomString = () => {
        return Math.random().toString(36).substring(7).split().join('.');
    }
    dispatch({
        type: `@@redux/INIT${randomString()}`
    });
    return {
        getState,
        subscribe,
        dispatch
    };
}

export {
    createStore
};