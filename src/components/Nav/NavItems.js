import { NavLink } from 'react-router-dom';
import classes from './NavItems.module.css';

const NavItem = (props) => {
	return <div className={classes.NavItem}>{props.render()}</div>;
};

const Desktop = ({ link }) => {
	return (
		<NavLink
			style={({ isActive }) => {
				return isActive ? { color: 'var(--nav-item-active-color)' } : {};
			}}
			to={link.to}
		>
			<div className={classes.Desktop}>
				{link.icon}
				{link.label}
			</div>
		</NavLink>
	);
};

const Mobile = ({ link }) => {
	return (
		<NavLink
			style={({ isActive }) => {
				return isActive ? { color: 'var(--nav-item-active-color)' } : {};
			}}
			to={link.to}
		>
			<div className={classes.Mobile}>{link.icon}</div>
		</NavLink>
	);
};

NavItem.Desktop = Desktop;
NavItem.Mobile = Mobile;

export default NavItem;
