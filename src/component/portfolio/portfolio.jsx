import Button from '../button/button';
import './portfolio.css'

const Portfolio = () => {
  const cases = [
    {
      firstTitle: 'Ремонт эстакад',
      subtitle: 'Капитальный ремонт и еще че нибудь напишите а то слишком мало выходит',
      secondTitle: 'Проделанные работы:',
      services: [
        ['Выкопали ямы (незнай зачем)', 'Ехал поезд запоздалый'],
        ['Положили рельсы', 'Рельсы рельсы, шпалы шпалы']
      ],
    }
  ]
  return (
    <div className="portfolio" >
      <h3>Наше портфолио</h3>
      <div className="portfolio-body" >
        <a href="#"><div className="left-arrow" /></a>
        <div className="portfolio-roll">
          {cases.map(
            ({ firstTitle, subtitle, secondTitle, services }) => (
              <div className="case">
                <div className="case-img" />
                <div className="case-desc">
                  <h4>{firstTitle}</h4>
                  <div className="subtitle" >{subtitle}</div>
                  <h5>{secondTitle}</h5>
                  <ul>
                    {services.map(
                      (item, id) => (
                        <div className="li-col" id={'row-' + id} key={'row-' + id}>
                          <li>{item[0]}</li>
                          <li>{item[1]}</li>
                        </div>
                      )
                    )}
                  </ul>
                  <div className="portfolio-button">
                    <Button>Оставить заявку</Button>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
        <a href="#"><div className="right-arrow" /></a>
      </div>
    </div>
  );
}

export default Portfolio;