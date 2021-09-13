import './header.css';

const Header = () => {
  return (
    <header className="header-canvas" >
      <div className="header-body">
        <div className="logotype">
          <div className="logo" />
          <div className="head-title">
            <b>Путьремстрой</b>
            <div className="subtitle" >Новые пути - новые горизонты</div>{/*Или В добрый путь с Путьремстрой*/}
          </div>
        </div>
        <nav>
          <li><a href="#">ГЛАВНАЯ</a></li>
          <li><a href="#portfolio">ПОРТФОЛИО</a></li>
          <li><a href="#about">О НАС</a></li>
          <li><a href="#geo" className="active">ГЕОГРАФИЯ</a></li>
          <li><a href="#contacts">КОНТАКТЫ</a></li>
        </nav>
        <div className="call-nav" >
          <div className="call-phone">
            <div className="phone" />
            <h3>8(902)272-93-14</h3>
          </div>
          <button />
        </div>
      </div>
    </header>
  );
}

export default Header;