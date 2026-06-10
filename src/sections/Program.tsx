import Section from "../components/Section";
import sec from "./sections.module.css";
import s from "./Program.module.css";

type ProgramItem = {
  time: string;
  title: string;
  paragraphs?: string[];
  lead?: string;
  bullets?: string[];
};

const PROGRAM: ProgramItem[] = [
  {
    time: "12:00",
    title: "Сбор гостей и приветственный фуршет",
    paragraphs: [
      "Регистрация участников, знакомство, общение.",
      "Для гостей будут подготовлены легкие угощения, шампанское, кофе и чай.",
      "Музыкальное сопровождение мероприятия — DJ-сет.",
      "В течение всего мероприятия будут работать контент-фотографы Аня Горган и Mari, которые будут создавать фото- и видеоконтент встречи.",
    ],
  },
  {
    time: "13:00",
    title: "Лекция «Женщина-предприниматель в эпоху перемен»",
    lead: "В программе лекции:",
    bullets: [
      "почему нестабильность стала новой реальностью;",
      "что помогает одним женщинам расти в период перемен, а других останавливает;",
      "как сохранять устойчивость;",
      "что будет определять успех в ближайшие годы;",
      "где находятся новые возможности для роста;",
      "как принимать решения быстрее и эффективнее;",
      "практические инструменты продаж в условиях высокой конкуренции.",
    ],
  },
  {
    time: "14:30",
    title: "Специальный мастер-класс от магазина косметики @tiffany_md",
    paragraphs: [
      "Интерактивный формат, подготовленный специально для участниц мероприятия.",
      "Подробности будут раскрыты во время встречи.",
    ],
  },
  {
    time: "15:00",
    title: "Розыгрыш подарков",
    paragraphs: [
      "Для участниц подготовлены специальные подарки и приятные сюрпризы от магазина косметики @tiffany_md.",
    ],
  },
  {
    time: "15:15",
    title: "Нетворкинг и свободное общение",
    bullets: [
      "ответы на вопросы;",
      "знакомство с участницами;",
      "обмен контактами;",
      "фотографии на память;",
      "свободное общение за чашкой кофе.",
    ],
  },
];

export default function Program() {
  return (
    <Section id="program" className={sec.block}>
      <div className="container">
        <h2 className="section-title">// ПРОГРАММА МЕРОПРИЯТИЯ</h2>
        <p className="section-eyebrow">&gt; РАСПИСАНИЕ ЗАГРУЖЕНО_</p>

        <div className={s.timeline}>
          {PROGRAM.map((item) => (
            <div key={item.time} className={s.item}>
              <div className={s.time}>{item.time}</div>
              <div className={s.card}>
                <h3 className={s.title}>{item.title}</h3>

                {item.lead && <p className={s.text}>{item.lead}</p>}

                {item.paragraphs?.map((p, i) => (
                  <p key={i} className={s.text}>
                    {p}
                  </p>
                ))}

                {item.bullets && (
                  <ul className={s.list}>
                    {item.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className={s.outro}>Завершение мероприятия</div>
      </div>
    </Section>
  );
}
