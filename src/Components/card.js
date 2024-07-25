import React from 'react';



const Card = (Props) => {
    return (
        <div className="col-md-3 mb-3">
            <div className="card shadow-ig">
                <img src={Props.pic} alt="Card image" />
                <div className="card-body">
                    <h3>More ideas to flourish</h3>
                </div>
            </div>
        </div>
    );
}

export default Card;
