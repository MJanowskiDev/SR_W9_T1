import { useContext } from 'react';
import {
	BrowserRouter,
	Routes,
	Route
  } from "react-router-dom";
  
import { FaHome, FaPlay, FaLocationArrow } from 'react-icons/fa';
import { PassphraseProviderContext } from 'components/PassphraseForm';
import Movies from 'components/Movies';
import Places from 'components/Places';
import Nav from 'components/Nav';
import Homepage from 'components/Homepage';

import classes from './Content.module.css';

const navLinks = [
	{ label: 'Home', icon: <FaHome />, to :'/' },
	{ label: 'Movies', icon: <FaPlay />, to:'/movies' },
	{ label: 'Places', icon: <FaLocationArrow />, to:'/places' }
];


const Content = () => {
	const { isAuthenticated } = useContext(PassphraseProviderContext);

	return (
		<>
			{isAuthenticated ? (
				<div className={classes.Content} >
					<BrowserRouter>
					<Nav navLinks={navLinks} />
					<div>
					<Routes>
						<Route path='/' element={<Homepage />} />
						<Route path='/movies' element={<Movies />} />
						<Route path ='/places' element={<Places />} />
					</Routes>
					</div>
					</BrowserRouter>
				</div>
			) : (
				<p>User is not Authenticated</p>
			)}
		</>
	);
};

export default Content;
