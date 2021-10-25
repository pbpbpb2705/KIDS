import React from "react";
import { useState, useEffect } from "react";
import { db } from "../../firebase-config-firestore";
import { collection, getDocs } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { Link } from "react-router-dom";
import "./DetailPage.css";
function NTD_3_2021() {
  const [post, setPost] = useState([]);
  const storage = getStorage();
  const usersCollectionRef = collection(db, "ntd-3-2021");
  const links = [];

  useEffect(() => {
      for (let i = 1; i <= 4; i += 1) {
        let key = i.toString() + ".png";
        let item = document.getElementById(i.toString());
        console.log(item);
        getDownloadURL(ref(storage, "ntd-3-2021/" + key))
          .then((url) => {
            links[i] = url;
            item.setAttribute("src", url);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    console.log(links);
    const getPost = async () => {
      const data = await getDocs(usersCollectionRef);
      setPost(
        data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
          link: links[parseInt(doc.id)]
        }))
      );
    };
    getPost();
    console.log(post);
  }, [post]);
  return (
    <div className="flex width-100">
      <div className="span-48" />
      <div className="flex bg-brown flex-row">
        <div className="flex">
          <h1>Núi Tượng Đồng - 3/2021</h1>
          <div className="span-96" />
          {post.map((para) => {
            return (
              <div className="flex">
                <h1 className="paragraph">{para.text}</h1>
                <img className="img" src={para.link} id={para.id} alt="" />
              </div>
            );
          })}
          <a
            href="https://www.facebook.com/media/set/?vanity=kidsvietnam14&set=a.2813715645562405"
            className="link"
            target="__blank"
          >
            Để biết thêm chi tiết, click vào đây
          </a>
        </div>

        <div className="main-2">
          <h1 className="black-title"> More projects </h1>
          <ul>
            <li>
              <Link to="/1314projects"> 2013 - 2014 </Link>
            </li>
            <li>
              <Link to="/1516projects"> 2015 - 2016 </Link>{" "}
            </li>
            <li>
              <Link to="/1718projects"> 2017 - 2018 </Link>{" "}
            </li>
            <li>
              <Link to="/1920projects"> 2019 - 2020 </Link>{" "}
            </li>
            <li>
              <Link to="/2122projects"> 2021 - 2022 </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NTD_3_2021;
