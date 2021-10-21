import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Tab from "../../components/tab/Tab";
import "./SearchPage.css";
function SearchPage() {
  const location = useLocation();
  const listItem = [
    { title: "Project 1", content: "First content" },
    { title: "Project 2", content: "Second content" },
    { title: "Project 3", content: "Third content" },
    { title: "Project 4", content: "Fourth content" },
    { title: "Project 5", content: "Fifth content" },
  ];
  const [resultList, setResultList] = useState([""]);
  const [message, setMessage] = useState("");
  function normalizeVn(item) {
    return item
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/đ/g, "d")
      .replace(/Đ/g, "D")
      .toLowerCase();
  }
  useEffect(() => {
    var tmp = 0;
    var tmpList = [];
    for (const item of listItem) {
      if (
        normalizeVn(item.title).includes(normalizeVn(location.state.detail)) ||
        normalizeVn(item.content).includes(normalizeVn(location.state.detail))
      ) {
        console.log(item);
        tmp = tmp + 1;
        tmpList.push(item);
      }
    }
    setResultList(
      tmpList.map((item) => <Tab title={item.title} content={item.content} />)
    );
    if (tmp < 2) setMessage(tmp + " result found");
    else setMessage(tmp + " results found");
  }, [location]);
  return (
    <div>
      <div className="search-message">{message}</div>
      <div>{resultList}</div>
    </div>
  );
}

export default SearchPage;
