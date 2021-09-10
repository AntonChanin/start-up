import Button from '../button/button';
import './portfolio.css'

const Portfolio = () => {
  const cases = [
    {
      firstTitle: 'Ремонт эстакад',
      subtitle: 'Капитальный ремонт и еще че нибудь напишите а то слишком мало выходит',
      secondTitle: 'Проделанные работы:',
      services: ['Выкопали ямы (незнай зачем)', 'Рельсы рельсы, шпалы шпалы', 'Положили рельсы', 'Ехал поезд запоздалый'],
    }
  ]
  return (
    <div className="portfolio" >
      <h3>Наше портфолио</h3>
      <div className="portfolio-roll">
        {cases.map(
          ({ firstTitle, subtitle, secondTitle, services }) => (
            <div className="case">
              <div className="case-img" />
              <div className="case-desc">
                <h4>{firstTitle}</h4>
                <span>{subtitle}</span>
                <h5>{secondTitle}</h5>
                <ul>
                  {services.map(
                    (item) => (
                      <li>{item}</li>
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
    </div>
  );
}

export default Portfolio;