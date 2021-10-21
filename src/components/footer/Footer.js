import React from 'react'
import "./Footer.css"
function Footer() {
    return (
      <footer>
        <div className='tab' />
        <div className='tab'>
          <h3>Thông tin</h3>
          <a href="#">Về project</a>
          <br />
          <a href="#">Sự kiện</a>
          <br />
          <a href="#">Gì gì đó</a>
        </div>
        <div className='tab'>
          <h3>Liên lạc</h3>
          <p>
            Facebook: <a href="#">KIDS Vietnam</a>
          </p>
          <p>
            Tel: <a href="#">012345678</a>
          </p>
          <p>
            Mail: <a href="mailto:#">@gmail.com</a>
          </p>
        </div>
      </footer>
    );
}

export default Footer;
