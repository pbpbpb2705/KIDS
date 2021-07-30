import React from 'react'
import {useState, useEffect} from 'react'
function Testing1() {
    const [fetchText,setFetchText] = useState("");

    useEffect (() => {
        fetch("../../../public/robot.txt")
            .then ( r => r.text())
            .then (t => {
                var tmp = t;
                setFetchText(tmp);
            })
    },[]);

    return (
        <div>
            {fetchText}
        </div>
    )
}

export default Testing1
