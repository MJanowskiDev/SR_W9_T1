import { useContext } from 'react';
import { PassphraseProviderContext } from 'components/PassphraseForm';

const Content = () => {
	const { isAuthenticated } = useContext(PassphraseProviderContext);

	return (
		<div>
			<h1>Hello!</h1>
			{isAuthenticated ? <p>User is isAuthenticated</p> : <p>User is not Authenticated</p>}
		</div>
	);
};

export default Content;
