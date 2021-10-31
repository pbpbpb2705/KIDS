import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { db } from "../../firebase-config-firestore";
import { collection, getDocs } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { Link } from "react-router-dom";
import "./DetailPage.css";

function DetailPage() {
  const [post, setPost] = useState([]);
  const [title,setTitle] = useState("");
  const storage = getStorage();
  const links = [];
  const location = useLocation();


  useEffect(() => {
    const usersCollectionRef = collection(db, location.pathname.split("/")[1]);
    console.log(location.pathname.split("/")[1]);
    for (let i = 1; i <= 5; i += 1) {
      let key = i.toString() + ".png";
      let item = document.getElementById(i.toString());
      getDownloadURL(ref(storage, location.pathname.split("/")[1] + "/" + key))
        .then((url) => {
          links[i] = url;
          item.setAttribute("src", url);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    const getPost = async () => {
      const data = await getDocs(usersCollectionRef);
      setPost(
        data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
    };
    getPost();

  }, []);
  return (
    <div className="flex width-100">
      <div className="span-48" />
      <div className="flex bg-brown flex-row">
        <div className="flex">
          <h1> {location.state.name} </h1>
          <div className="span-96" />{" "}
          {post.map((para) => {
            return (
              <div className="flex">
                <h1 className="paragraph" id={para.id}> {para.text} </h1>{" "}
              </div>
            );
          })}{" "}
          <img className="img" src={links[1]} id="1" alt="" />
          <img className="img" src={links[2]} id="2" alt="" />
          <img className="img" src={links[3]} id="3" alt="" />
          <img className="img" src={links[4]} id="4" alt="" />
          <img className="img" src={links[5]} id="5" alt="" />
        </div>
        <div className="main-2">
          <h1 className="black-title"> More projects </h1>{" "}
          <ul>
            <li>
              <Link to="/1314projects"> 2013 - 2014 </Link>{" "}
            </li>{" "}
            <li>
              <Link to="/1516projects"> 2015 - 2016 </Link>{" "}
            </li>{" "}
            <li>
              <Link to="/1718projects"> 2017 - 2018 </Link>{" "}
            </li>{" "}
            <li>
              <Link to="/1920projects"> 2019 - 2020 </Link>{" "}
            </li>{" "}
            <li>
              <Link to="/2122projects"> 2021 - 2022 </Link>{" "}
            </li>{" "}
          </ul>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default DetailPage;
