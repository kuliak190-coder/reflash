import Section from "../components/Section";
import s from "./sections.module.css";

export default function About() {
  return (
    <Section id="about" className={s.block}>
      <div className="container">
        <div className="panel">
          <h2 className="section-title">// ОШИБКА РЕАЛЬНОСТИ</h2>
          <p className={s.lead}>
            Приглашаю тебя на «ПЕРЕПРОШИВКУ» — авторское событие{" "}
            <span className="highlight">Инны Мушинской</span> для девушек и
            женщин, которые чувствуют:{" "}
            <span className="highlight">
              их масштаб больше, чем реальность, в которой они живут сейчас.
            </span>
          </p>
          <p className={s.text}>
            «ПЕРЕПРОШИВКА» — мероприятие для предпринимательниц, кто уже понял:{" "}
            <span className="highlight">МИР ИЗМЕНИЛСЯ</span> и прежние методы
            больше не приводят к нужным результатам.
          </p>
          <p className={s.text}>
            Новая реальность требует нового мышления. Сегодня выигрывает тот, кто
            умеет видеть возможности раньше других. В этот день соберутся женщины,
            которые создают, влияют, масштабируются и формируют своё имя осознанно.
          </p>
          <p className={s.text}>
            «ПЕРЕПРОШИВКА» — это про переход. Из хаоса — в систему. Из напряжения —
            в силу. Из усталости от борьбы — в новую реальность возможностей.
          </p>
        </div>
      </div>
    </Section>
  );
}
