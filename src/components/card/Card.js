import React from 'react'
import {useHistory} from 'react-router-dom'
function Card(props) {

    const History = useHistory()
    function handleClick(e) {
        e.preventDefault();
        History.push(props.href);
    }
    return (
        <div className="card">
            <img class="card-img-top" src={props.src} alt="Card image cap"/>
            <div className="card-body">
                <h1 class="card-title">{props.name}</h1>
                <button onClick={handleClick} className="btn btn-primary">Check it out</button>
            </div>
        </div>
    )
}

export default Card
