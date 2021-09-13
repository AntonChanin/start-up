import './button.css'

const Button = ({ children }) => (
    <button className="btn">{`${children}`}</button>
);

export default Button;