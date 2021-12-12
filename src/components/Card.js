import React from 'react';
import ReactDOM from 'react-dom';


const Card = ()=>{
    return (
        <div className="ui card">
            <div className="image"></div>
            <div className="content">
                <h1 className="header">Kristy</h1>
                <div className="meta">
                    <span className="date">Joined in 2013</span>
                </div>
                <div className="description">
                    Kristy is an art director living in New York.
                </div>
            </div>
            <div className="extra content">
                <i className="user icon"></i>
                <input type="text"/>
                <button> Submit</button>
            </div>
        </div>
    )
}

export default Card;