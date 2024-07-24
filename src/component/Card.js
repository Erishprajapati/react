import React from 'react';
const Card = (props) => {
    return(
        <>
        <div className="card">
            <div className="card-body">
                <h2>{props.name}</h2>
            </div>
        </div>
        </>
    )
}
export default Card;