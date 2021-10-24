import React from 'react'

function Card(props) {
    return (
        <div className="card">
            <img class="card-img-top" src={props.src} alt="Card image cap"/>
            <div className="card-body">
                <h1 class="card-title">{props.name}</h1>
                <a href={props.href} className="btn btn-primary">Check it out</a>
            </div>
        </div>
    )
}

export default Card
