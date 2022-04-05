import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import CustomLink from "../CustomLink/CustomLink";
import "./NavBar.css";

const NavBar = () => {
  const [open, setOpen] = useState(false);
	return (
		<div>
			<nav className="nav">
				<div onClick={() => setOpen(!open)} className="menu-icon">
					{ open ? <FontAwesomeIcon className="bars" icon={faXmark}></FontAwesomeIcon>: <FontAwesomeIcon className="bars" icon={faBars}></FontAwesomeIcon>}
				</div>
				<div className={`menu-items ${open ? 'menu-open' : 'menu-close'}`}>
					<CustomLink to="/">Home</CustomLink>
					<CustomLink to="/reviews">Reviews</CustomLink>
					<CustomLink to="/dashboard">Dashboard</CustomLink>
					<CustomLink to="/Blogs">Blogs</CustomLink>
				</div>
			</nav>
		</div>
	);
};

export default NavBar;
