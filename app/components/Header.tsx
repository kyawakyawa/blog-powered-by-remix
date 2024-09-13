import { Link } from "@remix-run/react";
import { motion } from "framer-motion";
import { blogTitle } from "../utils/global"

export default function Header() {


  return (
    <header>
      <motion.div animate={{ y: [-100, 0] }}>
        <div className="header_div">
          <Link to="/">
            <h1 className="header_h1">{blogTitle()}</h1>
          </Link>
          <nav className="header_nav">
            <ul className="header_ul">
              <li className="header_li">
                <Link to="/">
                  ARTICLES
                </Link>
              </li>
              <li className="header_li">
                <Link to="/about">
                  ABOUT
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </motion.div>
    </header>
  );
}
