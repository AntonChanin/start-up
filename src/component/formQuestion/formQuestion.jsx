import Button from '../button/button';
import './formQuestion.css'

const FormQuestion = () => {
  const formFields = [
    { title: 'Имя', placeholder: 'Михаил' },
    { title: 'Телефон', placeholder: '8 (800) 535 35 35' },
    { title: 'Почта', placeholder: 'company@mail.com' }
  ];
  return (
    <div className="form-question-canvas" >
      <h5>Остались вопросы?</h5>
      <div className="form-question-body">
        <div className="form-question-fields">
          {formFields.map(
            ({ title, placeholder }, id) => (
              <div className="form-question-field">
                <label>{title}</label><input placeholder={placeholder} id={`form-question_input-${id}`} />
              </div>
            )
          )}
          <div id="laptop" className="form-question-field_checkbox">
            <input type="checkbox" />
            <label>
              Даю свое согласие
              с <a>политикой конфиденциальности</a>
            </label>
          </div>
        </div>
        <div className="form-question-message" >
          <label>Комментарий</label>
          <textarea placeholder="Напишите ваш вопрос..." />
          <Button>ОТПРАВИТЬ</Button>
          <div id="mobile" className="form-question-field_checkbox">
            <input type="checkbox" />
            <label>
              Даю свое согласие
              с <a>политикой конфиденциальности</a>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormQuestion;