import NavItem from './NavItems';
import { useMobile } from 'hooks';

import classes from './Nav.module.css';

const Nav = ({ navLinks }) => {
	const isMobile = useMobile();
	return (
		<nav className={classes.Nav}>
			<NavItem
				render={() =>
					navLinks &&
					navLinks.map(
						(link) =>
							isMobile ? (
								<NavItem.Mobile key={`link-mobile-${link.label}`} link={link} />
							) : (
								<NavItem.Desktop key={`link-mobile-${link.label}`} link={link} />
							)
					)}
			/>
		</nav>
	);
};

export default Nav;
