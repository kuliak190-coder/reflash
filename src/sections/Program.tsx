15:00 */}
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
