import React from "react";

var curyear = new Date().getFullYear();
function Footer() {
  return (
    <div>
      <footer>
        <p>Copyright @ {curyear}</p>
      </footer>
    </div>
  );
}

export default Footer;
