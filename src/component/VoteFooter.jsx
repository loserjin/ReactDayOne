import React from "react";
import {connect} from "react-redux";
import Vote from "./Vote";
class VoteFooter extends React.Component {

    render() {
        const store = this.props.store;
        return <footer style={{backgroundColor: 'lightblue'}}>
            <button onClick={this.handle.bind(this,0)}>支持</button>
            <button onClick={this.handle.bind(this,1)}>反对</button>
        </footer>;
    }
    handle = (ls) =>{
        const {store} = this.props;
        if(ls===0){
            store.dispatch({
                type: 'SUPPORT',
                payload: 1
            });
            return;
        }
        store.dispatch({
            type: "OPPOSE",
            num: 1
        });
    }

}

export default VoteFooter;

export default connect(null,action.vote)(VoteFooter);
connect(null,{
    support(paload){
        return {
            type: TYPES.VOTE_SUPPORT,
            payload
        };
    },
    oppose(payload){
        return {
            type: TYPES.VOTE_OPPOSE,
            null: 0
        }
    }
})(VoteFooter);