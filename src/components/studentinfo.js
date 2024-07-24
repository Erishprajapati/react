import React from 'react';
class studentinfo extends React.Component{
constructor(props){
    super(props);
}
render(){
    return(
        <>
        <div className="sinfo">
            <h2> Name:{this.props.name} </h2>
            <p>Age:{this.props.age}</p>
        </div>
        </>
    )
}
}
export default studentinfo;