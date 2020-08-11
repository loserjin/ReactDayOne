import React from "react";
import VoteHeader from "./VoteHeader";
import VoteMain from "./VoteMain";
import VoteFooter from "./VoteFooter";
class Vote extends React.Component{


    // changeNum = type =>{
    //     if(type===0){
    //         this.setState({
    //             supNum: ++this.state.supNum
    //         });
    //         return;
    //     }
    //     this.setState({
    //         oppNum: ++this.state.oppNum
    //     });
    // };
    render(){
        return <section>
            <VoteHeader/>
            <VoteMain/>
            <VoteFooter/>
        </section>;
    }

}
export default Vote;