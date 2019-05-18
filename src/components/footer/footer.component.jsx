import React from "react";
import './footer.component.scss'

import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <Link to="/home">Landing</Link>
      <Link to="/login">Login</Link>
    </footer>
  )
}

export {
  Footer
}
