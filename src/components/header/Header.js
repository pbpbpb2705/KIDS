import React from 'react'
import "./Header.css"

function Header() {
    const listImage = ["img img-1", "img img-2", "img img-3", "img img-4"];
    let imgIndex = 0;
    const interval = setInterval(() => {
        if (document.getElementById("test") === null) clearInterval(interval);
        else {
            if (imgIndex < 3) imgIndex = imgIndex + 1;
            else imgIndex = 0;
            document.getElementById("test").className = listImage[imgIndex];
        }
    },2000);
    return (
        <div className="header-container">
            <div id="test" className="img img-1"></div>
            <button />
        </div>
    )
}

export default Header;
