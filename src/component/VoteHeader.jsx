import React from 'react';
import {connect} from "react-redux";

class VoteHeader extends React.Component {
    render() {
        let {title, supNum, oppNum} = this.props;
        return <header style={{background: 'lightblue'}}>
            <h3>{title}</h3>
            <span>N:{supNum + oppNum}</span>
        </header>;
    }
}

export default VoteHeader;

/*connect执行需要传递两个函数
* mapStateToProps：把redux容器中的公共状态当作属性传递给当前的组件
* mapDispatchToProps：把需要派发的行为方法通过属性传递给当前的组件*/
function mapStateToProps(state) {
    //state：redux容器中的所有公共状态
    //return的值就是当作属性传递给VoteHead的状态信息
    return {
        ...state.vote
    };
export default connect(mapStateToProps)(VoteHeader);