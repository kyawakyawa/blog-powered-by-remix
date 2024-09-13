import { Link } from "@remix-run/react";
import { motion, AnimationControls } from "framer-motion";
import styles from "../styles/components/GoBackHome.module.css"; // よくわからんが *.module.css という名前にしないとうまくimportできない

type GoBackHomeProps = {
  controls: AnimationControls;
};

export function GoBackHome({ controls }: GoBackHomeProps) {
  return (
    <Link to="/">
      <motion.button
        animate={controls}
        transition={{ duration: 0.25 }}
        className={styles.btn}
        onMouseOver={() =>
          controls.start({
            scale: 1.25,
          })
        }
        onMouseOut={() =>
          controls.start({
            scale: 1,
          })
        }
      >
        Go Back
      </motion.button>
    </Link>
  );
}
