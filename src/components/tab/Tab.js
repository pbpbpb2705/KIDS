import React from 'react'
import classes from "./Tab.module.css"
import {Link} from 'react-router-dom'
function Tab(props) {
    return (
        <div className={classes.container}>
            <div className={classes.header}>{props.title}</div>
            <div className={classes.content}>{props.content}</div>
            <Link className={classes.linkto} to={props.linkto}>Click me</Link>
        </div>
    )
}

export default Tab

