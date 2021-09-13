import FormFree from '../formFree/formFree';
import './baner.css'

const Baner = () => {
  return (
    <>
      <div className="baner-canvas" >
        <h3 id="laptop" >
          Услуги по строительству
          и ремонту железнодорожных путей
        </h3>
        <h3 id="mobile">
          Услуги по строительству и ремонту Ж/Д путей
        </h3>
        <h5>
          Компания проводит строительные и ремонтные работы на территории более чем 20 субъектов Российской Федерации
        </h5>
      </div>
      <div className="form-container"><FormFree /></div>
    </>
  );
}

export default Baner;