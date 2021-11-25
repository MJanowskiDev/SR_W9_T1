import { useState } from 'react';
import { PassphraseProvider, Form } from '.';
import Content from 'components/Content';

const checkValidity = (passphrase) => {
	return !!passphrase; //Implement validation algorithm in future
};

const PassphraseForm = ({ children }) => {
	const [ isAuthenticated, setIsAuthenticated ] = useState(false);

	const formSubmitHandle = (passphrase) => {
		const result = checkValidity(passphrase);
		setIsAuthenticated(result);
	};

	return (
		<PassphraseProvider value={{ isAuthenticated: true }}>
			{isAuthenticated ? children : <Form onFormSubmit={formSubmitHandle} />}
		</PassphraseProvider>
	);
};

PassphraseForm.Content = Content;

export default PassphraseForm;
