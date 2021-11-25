import classes from './Form.module.css';

const Form = ({ onFormSubmit }) => {
	const onSubmitHandle = (e) => {
		e.preventDefault();
		const passphrase = e.target.passphrase.value;
		onFormSubmit && onFormSubmit(passphrase);
	};

	return (
		<div className={classes.FormContainer}>
			<form className={classes.Form} onSubmit={onSubmitHandle}>
				<div className={classes.FormRow}>
					<label htmlFor="passphrase">Please enter secret Passphrase</label>
					<input id="passphrase" type="password" />
				</div>
				<button type="submit">Proceed</button>
			</form>
		</div>
	);
};

export default Form;
