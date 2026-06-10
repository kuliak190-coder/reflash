import { motion } from "framer-motion";
import Section from "../components/Section";

interface ProgramItem {
  time: string;
  title: string;
  desc: string;
}

const ITEMS: ProgramItem[] = [
  {
    time: "12:00",
    title: "СБОР ГОСТЕЙ И ПРИВЕТСТВЕННЫЙ ФУРШЕТ",
    desc: "Сбор гостей и приветственный фуршет. Регистрация участников, знакомство, общение.",
    desc: "Для гостей будут подготовлены легкие угощения, шампанское, кофе и чай.",
    desc: "Музыкальное сопровождение мероприятия — DJ-сет.",
  },
  {
    time: "13:00",
    title: "ОТКРЫТИЕ. ВВОДНАЯ СЕССИЯ",
    desc: "Инна Мушинская. Зачем мы здесь и что будет происходить.",
  },
  {
    time: "14:00",
    title: "ОСНОВНАЯ ПРАКТИКА",
    desc: "Работа с ограничивающими убеждениями. Перепрошивка внутренних программ.",
  },
  {
    time: "15:00",
    title: "РОЗЫГРЫШ ПОДАРКОВ",
    desc: "Для участниц подготовлены специальные подарки и приятные сюрпризы от партнёров мероприятия.",
  },
  {
    time: "15:15",
    title: "НЕТВОРКИНГ И СВОБОДНОЕ ОБЩЕНИЕ",
    desc: "Ответы на вопросы, знакомство с участницами, обмен контактами, фотографии на память.",
  },
];

export default function Program() {
  return (
    <Section id="program">
      <div className="panel">
        <p className="lead_wix1c_5">// ПРОГРАММА СИСТЕМЫ</p>
        <h2 className="section-title">ПРОГРАММА<br />МЕРОПРИЯТИЯ</h2>
        <ul className="neon-list">
          {ITEMS.map((item, i) => (
            <motion.li
              key={item.time}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <span className="time">{item.time}</span>
              <div className="event-content">
                <div className="event-title">{item.title}</div>
                <p className="event-desc">{item.desc}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
