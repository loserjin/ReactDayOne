import React from "react";

class VoteFooter extends React.Component{

    render(){
        return <footer style={{backgroundColor: 'lightblue'}}>
            <button>支持</button>
            <button>反对</button>
        </footer>;
    }
}
export default VoteFooter;
