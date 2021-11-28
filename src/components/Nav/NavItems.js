import classes from './NavItems.module.css';
const NavItem = (props) => {
	return <div className={classes.NavItem}>{props.render()}</div>;
};

const Desktop = ({ link }) => {
	return (
		<div className={classes.Desktop}>
			{link.icon}
			{link.label}
		</div>
	);
};

const Mobile = ({ link }) => {
	return <div className={classes.Desktop}>{link.icon}</div>;
};

NavItem.Desktop = Desktop;
NavItem.Mobile = Mobile;

export default NavItem;
