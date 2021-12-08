import { useState } from 'react';
import { PassphraseProvider, Form } from '.';
import Content from 'containers/Content';

const checkValidity = (passphrase) => {
    return !!passphrase; //Implement validation algorithm in future
};

const dummyUser = {
    email: 'jan@kowalski.pl',
    isAdmin: true
};

const AuthWrapper = ({ children }) => {
    const [ isAuthenticated, setIsAuthenticated ] = useState(false);
    const [ userInfo ] = useState(dummyUser);

    const formSubmitHandle = (passphrase) => {
        const result = checkValidity(passphrase);
        setIsAuthenticated(result);
    };

    return (
        <PassphraseProvider value={{ isAuthenticated: true, userInfo: userInfo }}>
            {isAuthenticated ? children : <Form onFormSubmit={formSubmitHandle} />}
        </PassphraseProvider>
    );
};

AuthWrapper.Content = Content;

export default AuthWrapper;
