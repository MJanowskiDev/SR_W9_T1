import { useContext } from 'react';
import { PassphraseProviderContext } from 'components/PassphraseForm';
import Movies from 'components/Movies/Movies';
import Places from 'components/Places/Places';
import Nav from 'components/Nav';
import { FaHome, FaPlay, FaLocationArrow } from 'react-icons/fa';

const navLinks = [
	{ label: 'Home', icon: <FaHome /> },
	{ label: 'Movies', icon: <FaPlay /> },
	{ label: 'Places', icon: <FaLocationArrow /> }
];
const Content = () => {
	const { isAuthenticated } = useContext(PassphraseProviderContext);

	return (
		<>
			{isAuthenticated ? (
				<div style={{ display: 'flex' }}>
					<Nav navLinks={navLinks} />
					<div>
						<Movies />
						<Places />
					</div>
				</div>
			) : (
				<p>User is not Authenticated</p>
			)}
		</>
	);
};

export default Content;
