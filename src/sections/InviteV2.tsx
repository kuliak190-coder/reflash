import Section from "../components/Section";
import s from "./sections.module.css";
import i from "./Invite.module.css";

export default function InviteV2() {
  return (
    <>
      <Section id="invite" className={s.block}>
        <div className="container">
          <div className={`panel ${i.invite}`}>
            <h2 className="section-title">// ПОДТВЕРЖДЕНИЕ СВЯЗИ</h2>
            <p className={s.lead}>
              Формат мероприятия предполагает ограниченное количество участниц.
            </p>
            <p className={s.text}>Стоимость участия — 650 руб.</p>
            <p className={s.text}>
              Буду очень рада видеть тебя среди женщин, которые выбирают для себя
              новый уровень жизни, мышления и окружения.
            </p>
            <p className={i.share}>
              Если тебе откликается философия этого события — буду рада, если ты
              поделишься им со своей аудиторией. Возможно, именно сейчас кто-то
              ищет ответы, которые помогут двигаться дальше.
            </p>
          </div>
        </div>
      </Section>

      <footer className={i.footer}>
        <div className="container">
          <p className={i.footerMeta}>
            14.06 | 12:00 · Терраса «Отель Россия» · black &amp; white 🖤🤍
          </p>
          <p>«ПЕРЕПРОШИВКА» — авторское событие Инны Мушинской</p>
        </div>
      </footer>
    </>
  );
}
