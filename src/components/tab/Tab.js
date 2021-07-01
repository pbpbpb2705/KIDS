import React from 'react'
import "./Tab.css"
function Tab(props) {
    return (
        <div className="tab-container">
            <div className="tab-header">{props.title}</div>
            <div className="tab-content">{props.content}</div>
        </div>
    )
}

export default Tab
