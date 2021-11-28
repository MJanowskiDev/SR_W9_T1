import { useState, useEffect } from 'react';

const checkIfIsMobile = (width, boundary) => {
	return width < boundary;
};

const useMobile = (boundaryWidth = 1024) => {
	useEffect(
		() => {
			const onResize = () => {
				setIsMobile(checkIfIsMobile(window.innerWidth, boundaryWidth));
			};
			window.addEventListener('resize', onResize);

			return () => window.removeEventListener('resize', onResize);
		},
		[ boundaryWidth ]
	);

	const [ isMobile, setIsMobile ] = useState(checkIfIsMobile(window.innerWidth, boundaryWidth));

	return isMobile;
};

export default useMobile;
