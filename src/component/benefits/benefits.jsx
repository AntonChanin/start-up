import './benefits.css'

const Benefit = () => {
  const benefits = [
    {
      asset: [
        'eco',
        'opr'
      ],
      title: [
        'Экономия стредств',
        'Оперативность'
      ],
      text: [
        'Специалисты нашей компании грамотно рассчитываю объем работ и количество затрачиваемых материалов, что позволяет исключить дополнительные расходы на заключительных этапах.',
        'Один из ключевых факторов нашей работы. Скорость реагирования — залог бесперебойной работы железнодорожного транспорта.'
      ],
    },
    {
      asset: [
        'exp',
        'ser'
      ],
      title: [
        'Большой опыт',
        'Высокий сервис'
      ],
      text: [
        'За 2020 год наша компания уложила более 5 километров новых железнодорожных путей и отремонтировала более 30 километров.',
        'Наша компания открыта для поиска оптимальных решений с целью достижения поставленных клиентами задач.'
      ],
    },
    {
      asset: [
        'pay',
        'qua'
      ],
      title: [
        'Удобная оплата',
        'Качество'
      ],
      text: [
        'Постоянный поставщик, сертифицированные материалы. Все сотрудники имеют высокую квалификацию. Работы выполняются современными специализированными инструментами и оборудованием.',
        'Для постоянных клиентов существует возможность оплаты в рассрочку. Предлагаем поэтапную оплату или работаем с предоплатой менее 40%.'
      ]
    },
  ];

  return (
    <>
      <div className="benefits-canvas" >
        <h3>Преимущества работы с нами</h3>
        <div className="benefits-body" >
          {benefits.map(
            ({ asset, title, text }, id) => (
              <div className="benefit-twice" key={'benefit-' + id}>
                <div className="benefit">
                  <div className={'benefit-img ' + asset[0]} ><div className="benefit-img-prime" /></div>
                  <div className="benefit-desc">
                    <h4>{title[0]}</h4>
                    <article>{text[0]}</article>
                  </div>
                </div>
                <div className="benefit">
                  <div className={'benefit-img ' + asset[1]} ><div className="benefit-img-prime" /></div>
                  <div className="benefit-desc">
                    <h4>{title[1]}</h4>
                    <article>{text[1]}</article>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
}

export default Benefit;