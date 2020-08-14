import React from "react";
import VoteHeader from "./VoteHeader";
import VoteMain from "./VoteMain";
import VoteFooter from "./VoteFooter";

class Vote extends React.Component {
    render() {
        let store = this.props.store;
        return <section>
            <VoteHeader store={store}/>
            <VoteMain store={store}/>
            <VoteFooter store={store}/>
        </section>;
    }

}

export default Vote;