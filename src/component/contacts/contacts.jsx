import FormQuestion from '../formQuestion/formQuestion';
import './contacts.css'

const Contacts = () => {
  return (
    <>
      <div className="contacts-canvas" id="contacts" >
        <div className="contacts-body">
          <h2>Контакты</h2>
          <div className="contacts-row" >
            <span>Телефон:</span>
            <div className="contacts-column" >
              <div>8(902)272-93-14</div>
              <div>8(982)178-03-07</div>
            </div>
          </div>
          <div className="contacts-row">
            <span>E-mail:</span>
            <div className="contacts-column" >
              <div>nasvaniye@mail.ru</div>
            </div>
          </div>
          <div className="contacts-row">
            <span>Адрес:</span>
            <div className="contacts-column" >
              <div>г. Екатеринбург, ул.  Колмогорова, дом 67</div>
            </div>
          </div>
          <h4>ООО “Название”</h4>
          <div className="icons">
            <div className="icon icon-message" />
            <div className="icon icon-phone" />
            <div className="icon icon-mail" />
          </div>
        </div>
        <FormQuestion />
      </div>
    </>
  )
};

export default Contacts;