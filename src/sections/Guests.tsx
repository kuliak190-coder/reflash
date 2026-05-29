import { motion } from "motion/react";
import { guests } from "../data/guests";
import s from "./sections.module.css";
import g from "./Guests.module.css";

export default function Guests() {
  return (
    <section id="guests" className={s.block}>
      <div className="container">
        <motion.div
          className={g.header}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={g.title}>Участницы системы</h2>
          <p className={g.subtitle}>
            Сильное женское окружение, которое создаёт, влияет и масштабируется
          </p>
        </motion.div>

        <div className={g.grid}>
          {guests.map((guest, i) => (
            <motion.article
              key={guest.photo}
              className={g.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              whileHover={{ y: -6 }}
            >
              <img
                className={g.photo}
                src={guest.photo}
                alt={guest.name}
                loading="lazy"
              />
              <span className={g.frame} />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
