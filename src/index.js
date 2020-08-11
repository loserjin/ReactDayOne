import React from 'react';
import ReactDOM from 'react-dom';
// import {createStore} from 'redux';
import Vote from './Vote';
/*创建一个公共容器store, Reducer是管理员*/
// const initialState ={
//       title: 'REACT还是VUE好学习',
//       supNum: 0,
//       oppNum: 0,
// };
// const store = createStore(function reducer(state,action){
//       /*state:原始容器中的状态信息（初始容器中没有状态信息，我们给其赋值默认值）
//       * action:组件内部基于dispatch派发的任务对象（要求对象中必须要type属性
//       * ，因为我们需要基于type判断派发的是什么任务，从而修改不同的公共状态信息）*/
// })
ReactDOM.render(<>
      <Vote/>
</>, document.getElementById('root'));


// serviceWorker.unregister();
