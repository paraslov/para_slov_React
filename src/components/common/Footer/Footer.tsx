import classes from "./Footer.module.css"


const Footer: React.FC = () => {
	return (
		<div>
			<div className = {classes.footerText}>
				© 2021 Para Slov. Made with ReactJS
			</div>
		</div>
)}

export default Footer