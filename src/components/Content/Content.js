import { useContext } from 'react';
import { PassphraseProviderContext } from 'components/PassphraseForm';
import Movies from 'components/Movies/Movies';
import Places from 'components/Places/Places';

const Content = () => {
  const { isAuthenticated } = useContext(PassphraseProviderContext);

  return (
    <div>
      <h1>Hello!</h1>
      {isAuthenticated ? (
        <div>
          <p>User is isAuthenticated</p>
          <Movies />
          <Places />
        </div>
      ) : (
        <p>User is not Authenticated</p>
      )}
    </div>
  );
};

export default Content;
