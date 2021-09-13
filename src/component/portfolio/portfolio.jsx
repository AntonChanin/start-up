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
    <div className="portfolio-canvas" id="portfolio" >
      <h3>Наше портфолио</h3>
      <div className="portfolio-body" >
        <a id="laptop" href="#"><div className="left-arrow" /></a>
        <div className="portfolio-roll">
          {cases.map(
            ({ firstTitle, subtitle, secondTitle, services }) => (
              <div className="case">
                <div className="case-img" />
                <div className="case-desc">
                  <div className="case-desc-border">
                    <h4>{firstTitle}</h4>
                    <div className="subtitle" >{subtitle}</div>
                    <h5>{secondTitle}</h5>
                    <div className="list" >
                      {services.map(
                        (item, id) => (
                          <div className="li-col" id={'row-' + id} key={'row-' + id}>
                            <span><div className="img-check" />{item[0]}</span>
                            <span><div className="img-check" />{item[1]}</span>
                          </div>
                        )
                      )}
                    </div>
                    <div className="portfolio-button">
                      <Button>Оставить заявку</Button>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
        <div className="arrows-group">
          <a id="mobile" href="#"><div className="left-arrow" /></a>
          <a href="#"><div className="right-arrow" /></a>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;