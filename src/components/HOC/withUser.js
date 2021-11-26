import React, { useContext } from 'react';
import { PassphraseProviderContext } from 'components/PassphraseForm';

const withUser =
  (Component) =>
  ({ ...props }) => {
    const { userInfo } = useContext(PassphraseProviderContext);
    return <Component userInfo={userInfo} {...props} />;
  };

export default withUser;
