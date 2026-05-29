import { motion } from "motion/react";
import Section from "../components/Section";
import useCountdown from "../hooks/useCountdown";
import s from "./sections.module.css";
import c from "./Countdown.module.css";

export default function Countdown() {
  const { days, hours, mins, secs, isOver } = useCountdown();

  const units = [
    { value: days, label: "Дней" },
    { value: hours, label: "Часов" },
    { value: mins, label: "Минут" },
    { value: secs, label: "Секунд" },
  ];

  return (
    <Section id="countdown" className={s.block}>
      <div className="container">
        <div className="panel">
          <h2 className="section-title">// ПАРАМЕТРЫ ЗАГРУЗКИ</h2>

          {isOver ? (
            <div className={c.over}>СИСТЕМА ЗАПУЩЕНА. ДОСТУП ЗАКРЫТ.</div>
          ) : (
            <div className={c.countdown}>
              {units.map((u) => (
                <div key={u.label} className={c.timeBox}>
                  <motion.span
                    key={u.label === "Секунд" ? secs : u.value}
                    className={c.value}
                    initial={{ opacity: 0.4, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {String(u.value).padStart(2, "0")}
                  </motion.span>
                  <span className={c.label}>{u.label}</span>
                </div>
              ))}
            </div>
          )}

          <ul className={`neon-list ${c.params}`}>
            <li>
              <strong>ДАТА:</strong> 14 июня | 12:00
            </li>
            <li>
              <strong>ЛОКАЦИЯ:</strong> Терраса «Отель Россия»
            </li>
            <li>
              <strong>DRESS CODE:</strong> black &amp; white 🖤🤍
            </li>
            <li>
              <strong>СТОИМОСТЬ:</strong> 650 руб. ·{" "}
              <span className={c.free}>по приглашению — без оплаты 🖤</span>
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
