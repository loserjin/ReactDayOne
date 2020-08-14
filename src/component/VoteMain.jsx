import React from "react";

class VoteMain extends React.Component {
    constructor(props) {
        super(props);
        //把公共状态信息赋值给当前组件的私有状态信息（这样后期可以根据需求玩自己
        // 的状态而不影响公共的....）
        const store = this.props.store,
            {supNum, oppNum} = store.getState();
        this.state = {
            supNum,
            oppNum
        };

    }

    render() {
        return <main>
            <p>支持人数：{this.state.supNum}</p>
            <p>反对人数：{this.state.oppNum}</p>
        </main>;
    }

    componentDidMount() {
        const {store} = this.props;
        store.subscribe(() => {
            //细腻的优化（redux的本身的漏洞，不论改变的公共状态当前组件是否用到
            // ），只要通知事件池中的方法执行，当前组件加进去的重新渲染的方法都会被执行
            const {supNum, oppNum} = store.getState();
            if (supNum !== this.state.supNum) {
                this.setState({
                    supNum: supNum
                });
            }
            if (oppNum !== this.state.oppNum) {
                this.setState({
                    oppNum: oppNum
                });
            }
        })
    }
}

export default VoteMain;