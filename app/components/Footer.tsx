import { Link } from "@remix-run/react";
import { blogTitle, copyrightNotice } from "../utils/global";
import { motion } from "framer-motion";
import { footerIcon } from "../utils/global"


export default function Footer() {

  return (
    <>
      <hr />
      <footer>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ease: "easeOut", duration: 1.5 }}
        >
          <div className="header_div">
            <Link to="/">
              {blogTitle() + " "}
              <span className="logo">
                <img src={footerIcon()} width="20" height="20" /> {/* FIXME: */}
              </span>
            </Link>
          </div>
          <br /> {copyrightNotice()}
        </motion.div>
      </footer>
    </>
  );
}
