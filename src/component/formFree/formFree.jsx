import Button from '../button/button';
import './formFree.css'

const FormFree = () => {
	const formFields = [
		{ title: 'Имя', placeholder: 'Михаил' },
		{ title: 'Телефон', placeholder: '8 (800) 535 35 35' },
		{ title: 'Почта', placeholder: 'company@mail.com' }
	];
	return (
		<div className="free-form" >
			<h5>Оставьте заявку на <a href="#">бесплатную</a> консультацию</h5>
			<div className="form-body">
				<div className="form-fields">
					{formFields.map(
						({ title, placeholder }, id) => (
							<div className="form-field">
								<label>{title}</label><input placeholder={placeholder} id={`form-free_input-${id}`} />
							</div>
						)
					)}
				</div>
				<Button>ОТПРАВИТЬ</Button>
			</div>
		</div>
	);
}

export default FormFree;