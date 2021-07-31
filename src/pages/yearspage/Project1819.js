import React from 'react'
import classes from "./Project1819.module.css"
import Tab from "../../components/tab/Tab"
function Project1819() {
    const itemList = [
      { title: "Testing 1", content: "Test", linkto: "/testing1" },
      { title: "Testing 2", content: "Test", linkto: "/testing2" },
      { title: "Testing 3", content: "Test", linkto: "/testing3" },
      { title: "Testing 4", content: "Test", linkto: "/testing4" },
    ];
    const tabList = itemList.map((item) => (
      <Tab title={item.title} content={item.content} linkto={item.linkto} />
    ));
    return (
      <div>
        <div className={classes.container}>{tabList}</div>
      </div>
    );
}

export default Project1819;
