import { motion } from "motion/react";
import Section from "../components/Section";
import s from "./sections.module.css";

const ITEMS = [
  "Какие женщины будут расти дальше",  
  "Как продавать и расти в эпоху не стабильности",
  "План действий на ближайшие 30 дней",
  "Сильное женское окружение",
  "Угощения и шампанское",
  "Фото и видеоконтент от Ани Горган",
  "Сюрпризы и подарки от Tiffany",
  "Музыкальный сет от Dj Андрей crash",
];

export default function Program() {
  return (
    <Section id="program" className={s.block}>
      <div className="container">
        <div className="panel">
          <h2 className="section-title">// ПРОГРАММА СИСТЕМЫ (ВАС ЖДЁТ)</h2>
          <p className={s.lead}>
            Красивое пространство. Сильное окружение. Честные разговоры. Глубокие
            смыслы. Лекция о том, Как женщине сохранить устойчивость в кризис 
          </p>
          <ul className="neon-list">
            {ITEMS.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
