import React from 'react';
class VoteHeader extends React.Component{
    render(){
        return <header style={{background: 'lightblue'}}>
            <h3>{}</h3>
            <span>N:{}</span>
        </header>;
    }
}
export default VoteHeader;