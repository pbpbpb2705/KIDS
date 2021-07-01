import React from 'react'
import {useLocation} from 'react-router-dom'
import {useEffect, useState} from 'react';
import Tab from "../components/tab/Tab"
import "./SearchPage.css";
function SearchPage() {
    const location = useLocation();
    const listItem = [
        { title: 'First', content: "First content"},
        { title: 'Second', content: "Second content"},
        { title: 'Third', content: "Third content"},
        { title: 'Fourth', content: "Fourth content"},
        { title: 'Fifth', content: "Fifth content"}
    ]
    const [resultCount, setResultCount] = useState(0);
    const [resultList, setResultList] = useState([""]);
    const [message, setMessage] = useState("");
    function normalizeVn(item) {
        return item.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/đ/g, "d").replace(/Đ/g, "D").toLowerCase();
    }
    useEffect(() => {
        var tmp = 0;
        var tmpList = [];
        for (const item of listItem) {
            if (normalizeVn(item.title).includes(normalizeVn(location.state.detail)) || normalizeVn(item.content).includes(normalizeVn(location.state.detail))) {
                console.log(item);
                tmp = tmp + 1;
                tmpList.push(item);
            }
        }
        setResultCount(tmp);
        setResultList(tmpList.map((item) => <Tab title={item.title} content={item.content}/>));
        if (resultCount<2) setMessage(resultCount + " result found");
        else setMessage(resultCount + " results found");
    },[location])
    return (
      <div>
        <div className="search-message">{message}</div>
        <div>
          {resultList}
        </div>
      </div>
    );
}

export default SearchPage
