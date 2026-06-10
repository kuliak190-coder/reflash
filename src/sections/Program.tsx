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
    
    <section class="event-program-section" style="padding: 40px 0; max-width: 800px; margin: 0 auto; font-family: inherit;">
    
    <h2 style="text-align: center; font-size: 2rem; margin-bottom: 40px; text-transform: uppercase;">
        Программа мероприятия
    </h2>

    <div class="timeline" style="display: flex; flex-direction: column; gap: 30px;">

        <div class="timeline-item" style="display: flex; gap: 20px; align-items: flex-start;">
            <div class="time" style="font-weight: 700; font-size: 1.5rem; min-width: 80px; padding-top: 3px;">
                12:00
            </div>
            <div class="content" style="flex: 1; padding: 20px; background: rgba(0,0,0,0.03); border-radius: 12px;">
                <h3 style="margin-top: 0; margin-bottom: 15px; font-size: 1.3rem;">Сбор гостей и приветственный фуршет</h3>
                <p style="margin-bottom: 10px;">Регистрация участников, знакомство, общение.</p>
                <p style="margin-bottom: 10px;">Для гостей будут подготовлены легкие угощения, шампанское, кофе и чай.</p>
                <p style="margin-bottom: 10px;">Музыкальное сопровождение мероприятия — DJ-сет.</p>
                <p style="margin-bottom: 0;">В течение всего мероприятия будут работать контент-фотографы Аня Горган и Mari, которые будут создавать фото- и видеоконтент встречи.</p>
            </div>
        </div>

        <div class="timeline-item" style="display: flex; gap: 20px; align-items: flex-start;">
            <div class="time" style="font-weight: 700; font-size: 1.5rem; min-width: 80px; padding-top: 3px;">
                13:00
            </div>
            <div class="content" style="flex: 1; padding: 20px; background: rgba(0,0,0,0.03); border-radius: 12px;">
                <h3 style="margin-top: 0; margin-bottom: 15px; font-size: 1.3rem;">Лекция «Женщина-предприниматель в эпоху перемен»</h3>
                <p style="margin-bottom: 10px;">В программе лекции:</p>
                <ul style="margin-bottom: 0; padding-left: 20px; line-height: 1.6;">
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

        <div class="timeline-item" style="display: flex; gap: 20px; align-items: flex-start;">
            <div class="time" style="font-weight: 700; font-size: 1.5rem; min-width: 80px; padding-top: 3px;">
                14:30
            </div>
            <div class="content" style="flex: 1; padding: 20px; background: rgba(0,0,0,0.03); border-radius: 12px;">
                <h3 style="margin-top: 0; margin-bottom: 15px; font-size: 1.3rem;">Специальный мастер-класс от @Tiffany_md</h3>
                <p style="margin-bottom: 10px;">Интерактивный формат от магазина косметики, подготовленный специально для участниц мероприятия.</p>
                <p style="margin-bottom: 0;">Подробности будут раскрыты во время встречи.</p>
            </div>
        </div>

        <div class="timeline-item" style="display: flex; gap: 20px; align-items: flex-start;">
            <div class="time" style="font-weight: 700; font-size: 1.5rem; min-width: 80px; padding-top: 3px;">
                15:00
            </div>
            <div class="content" style="flex: 1; padding: 20px; background: rgba(0,0,0,0.03); border-radius: 12px;">
                <h3 style="margin-top: 0; margin-bottom: 15px; font-size: 1.3rem;">Розыгрыш подарков</h3>
                <p style="margin-bottom: 0;">Для участниц подготовлены специальные подарки и приятные сюрпризы от партнеров мероприятия.</p>
            </div>
        </div>

        <div class="timeline-item" style="display: flex; gap: 20px; align-items: flex-start;">
            <div class="time" style="font-weight: 700; font-size: 1.5rem; min-width: 80px; padding-top: 3px;">
                15:15
            </div>
            <div class="content" style="flex: 1; padding: 20px; background: rgba(0,0,0,0.03); border-radius: 12px;">
                <h3 style="margin-top: 0; margin-bottom: 15px; font-size: 1.3rem;">Нетворкинг и свободное общение</h3>
                <ul style="margin-bottom: 0; padding-left: 20px; line-height: 1.6;">
                    <li>ответы на вопросы;</li>
                    <li>знакомство с участницами;</li>
                    <li>обмен контактами;</li>
                    <li>фотографии на память;</li>
                    <li>свободное общение за чашкой кофе.</li>
                </ul>
            </div>
        </div>

    </div>

    <div style="text-align: center; margin-top: 40px; font-size: 1.2rem; font-weight: bold; opacity: 0.8;">
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
