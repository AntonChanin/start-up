import './about.css'

const About = () => {
  return (
    <>
      <div className="about-canvas" >
        <h3>О нашей компании</h3>
        <div className="about-body">
          <div className="about-desc">
            <div className="about-content">
              <h4>Компания ООО”Название”</h4>
              <article>Оказывает широкий спектр услуг по строительству и ремонту железнодорожных путей, Ремонт железнодорожных тупиков, стрелочных переводов, переездов. Опытные сотрудники, наличие необходимого оборудования позволяет в кратчайшие сроки выполнить работы любой сложности качественно и в кратчайшие сроки. Гибкая ценовая политика, наличие СРО. Подбор материалов от новых до Б/У от партнёров.</article>
              <div className="img-backway" />
              <div className="docs">
                <div className="img-doc-first" />
                <div className="img-doc-second" />
              </div>
            </div>
          </div>
          <div className="img-farway" />
        </div>
      </div>
    </>
  );
}

export default About;