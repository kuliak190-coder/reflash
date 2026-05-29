import { motion } from "motion/react";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <header id="top" className={styles.hero}>
      <div className="container">
        <div className={styles.stage}>
          <div className={styles.titleWrap}>
            <motion.h1
              className={styles.bigTitle}
              initial={{ opacity: 0, scale: 1.08 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              ПЕРЕПРОШИВКА
            </motion.h1>
          </div>

          <motion.img
            className={styles.figure}
            src="/main.png"
            alt="ПЕРЕПРОШИВКА — выбор реальности"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
          />
        </div>

        <motion.div
          className={styles.captions}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <div className={styles.captionLeft}>
            <motion.span
              className={styles.typing}
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, delay: 0.7, ease: "easeOut" }}
            >
              &gt; СИСТЕМА РАСПОЗНАЛА ТЕБЯ_
            </motion.span>
          </div>

          <div className={styles.captionRight}>
            <p className={styles.subtitle}>
              Ты создана для масштаба и влияния
            </p>
            <p className={styles.meta}>
              <span className={styles.accent}>14.06</span> | 12:00
              <br />
              Терраса «Отель Россия»
              <br />
              Dress code: black &amp; white 🖤🤍
            </p>
          </div>
        </motion.div>

        <motion.div
          className={styles.actions}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
        >
          <motion.a
            href="#invite"
            className="btn"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            Инициализировать доступ
          </motion.a>
          <motion.a
            href="#about"
            className="btn btn--ghost"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            Узнать больше
          </motion.a>
        </motion.div>
      </div>
    </header>
  );
}
