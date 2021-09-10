import './header.css';

const Header = () => {
  return (
    <header>
      <div className="logotype">
        <div className="logo" />
        <div className="head-title">
          <b>Название</b>{/*Путьремстрой */}
          <div className="subtitle" >И какой нибудь лозунг</div>{/*Новые пути - новые горизонты*/}
        </div>
      </div>
      <nav>
        <li><a href="#">ГЛАВНАЯ</a></li>
        <li><a href="#">ПОРТФОЛИО</a></li>
        <li><a href="#">О НАС</a></li>
        <li><a href="#">ГЕОГРАФИЯ</a></li>
        <li><a href="#">КОНТАКТЫ</a></li>
      </nav>
      <div className="call-phone">
        <div className="phone" />
        <h3>8(902)272-93-14</h3>
      </div>
    </header>
  );
}

export default Header;