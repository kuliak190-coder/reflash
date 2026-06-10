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
  "Cюрпризы и подарки ОТ МАГАЗИНА @tiffani_md",
  "Музыкальный сет от Dj Андрей crash",
];

export default function Program() {
  return (
    <Section id="program" className={s.block}>
      <div className="container">
        <div className="panel">
          <h2 className="section-title">// ПРОГРАММА СИСТЕМЫ (ВАС ЖДЁТ)</h2>
          <p className={s.lead}>
<div class="event-program">
    
   <section className="event-program-section" style={{ padding: '40px 0', maxWidth: '800px', margin: '0 auto', fontFamily: 'inherit' }}>
    
    <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '40px', textTransform: 'uppercase' }}>
        Программа мероприятия
    </h2>

    <div className="timeline" style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>

        {/* 12:00 */}
        <div className="timeline-item" style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
            <div className="time" style={{ fontWeight: 700, fontSize: '1.5rem', minWidth: '80px', paddingTop: '3px' }}>
                12:00
            </div>
            <div className="content" style={{ flex: 1, padding: '20px', background: 'rgba(0,0,0,0.03)', borderRadius: '12px' }}>
                <h3 style={{ marginTop: 0, marginBottom: '15px', fontSize: '1.3rem' }}>Сбор гостей и приветственный фуршет</h3>
                <p style={{ marginBottom: '10px' }}>Регистрация участников, знакомство, общение.</p>
                <p style={{ marginBottom: '10px' }}>Для гостей будут подготовлены легкие угощения, шампанское, кофе и чай.</p>
                <p style={{ marginBottom: '10px' }}>Музыкальное сопровождение мероприятия — DJ-сет.</p>
                <p style={{ marginBottom: 0 }}>В течение всего мероприятия будут работать контент-фотографы Аня Горган и Mari, которые будут создавать фото- и видеоконтент встречи.</p>
            </div>
        </div>

        {/* 13:00 */}
        <div className="timeline-item" style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
            <div className="time" style={{ fontWeight: 700, fontSize: '1.5rem', minWidth: '80px', paddingTop: '3px' }}>
                13:00
            </div>
            <div className="content" style={{ flex: 1, padding: '20px', background: 'rgba(0,0,0,0.03)', borderRadius: '12px' }}>
                <h3 style={{ marginTop: 0, marginBottom: '15px', fontSize: '1.3rem' }}>Лекция «Женщина-предприниматель в эпоху перемен»</h3>
                <p style={{ marginBottom: '10px' }}>В программе лекции:</p>
                <ul style={{ marginBottom: 0, paddingLeft: '20px', lineHeight: 1.6 }}>
                    <li>почему нестабильность стала новой реальностью;</li>
                    <li>что помогает одним женщинам расти в период перемен, а других останавливает;</li>
                    <li>как сохранять устойчивость;</li>
                    <li>что будет определять успех в ближайшие годы;</li>
                    <li>где находятся новые возможности для роста;</li>
                    <li>как принимать решения быстрее и эффективнее;</li>
                    <li>практические инструменты продаж в условиях высокой конкуренции.</li>
                </ul>
            </div>
        </div>

        {/* 14:30 */}
        <div className="timeline-item" style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
            <div className="time" style={{ fontWeight: 700, fontSize: '1.5rem', minWidth: '80px', paddingTop: '3px' }}>
                14:30
            </div>
            <div className="content" style={{ flex: 1, padding: '20px', background: 'rgba(0,0,0,0.03)', borderRadius: '12px' }}>
                <h3 style={{ marginTop: 0, marginBottom: '15px', fontSize: '1.3rem' }}>Специальный мастер-класс от @Tiffany_md</h3>
                <p style={{ marginBottom: '10px' }}>Интерактивный формат от магазина косметики, подготовленный специально для участниц мероприятия.</p>
                <p style={{ marginBottom: 0 }}>Подробности будут раскрыты во время встречи.</p>
            </div>
        </div>

        {/* 15:00 */}
        <div className="timeline-item" style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
            <div className="time" style={{ fontWeight: 700, fontSize: '1.5rem', minWidth: '80px', paddingTop: '3px' }}>
                15:00
            </div>
            <div className="content" style={{ flex: 1, padding: '20px', background: 'rgba(0,0,0,0.03)', borderRadius: '12px' }}>
                <h3 style={{ marginTop: 0, marginBottom: '15px', fontSize: '1.3rem' }}>Розыгрыш подарков</h3>
                <p style={{ marginBottom: 0 }}>Для участниц подготовлены специальные подарки и приятные сюрпризы от партнеров мероприятия.</p>
            </div>
        </div>

        {/* 15:15 */}
        <div className="timeline-item" style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
            <div className="time" style={{ fontWeight: 700, fontSize: '1.5rem', minWidth: '80px', paddingTop: '3px' }}>
                15:15
            </div>
            <div className="content" style={{ flex: 1, padding: '20px', background: 'rgba(0,0,0,0.03)', borderRadius: '12px' }}>
                <h3 style={{ marginTop: 0, marginBottom: '15px', fontSize: '1.3rem' }}>Нетворкинг и свободное общение</h3>
                <ul style={{ marginBottom: 0, paddingLeft: '20px', lineHeight: 1.6 }}>
                    <li>ответы на вопросы;</li>
                    <li>знакомство с участницами;</li>
                    <li>обмен контактами;</li>
                    <li>фотографии на память;</li>
                    <li>свободное общение за чашкой кофе.</li>
                </ul>
            </div>
        </div>

    </div>

    <div style={{ textAlign: 'center', marginTop: '40px', fontSize: '1.2rem', fontWeight: 700, opacity: 0.8 }}>
        Завершение мероприятия
    </div>

</section>
</div>
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
