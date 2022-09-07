import React, {useState} from "react";
import "./header.scss";
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	NavbarText,
} from "reactstrap";
import Box from "@mui/material/Box";
import logo from "../../assets/images/logo.svg";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);

	return (
		<Navbar expand="md" fixed="top" color="light" light>
			<Box
				display={"flex"}
				justifyContent="space-evenly"
				sx={{
					padding: "0 20rem",
					width: "100%",
				}}
			>
				<NavbarBrand href="/">
					<img className="logo" src={logo} alt="logo" />
				</NavbarBrand>
				<Collapse isOpen={isOpen} navbar>
					<Nav navbar>
						<NavItem>
							<NavLink href="">Overview</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="">Highlights</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="">Floor Plan</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="">Pricing</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="">Site Visit </NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="">Location</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="">Contact</NavLink>
						</NavItem>
					</Nav>
					<NavbarText
						onClick={() => {
							window.open("tel:9999999999");
						}}
					>
						<PhoneInTalkIcon
							sx={{fontSize: "2rem", marginRight: "0.5rem"}}
						/>
						<Box component={"span"}> +91 9999999999</Box>
					</NavbarText>
				</Collapse>
				<NavbarToggler onClick={toggle} />
			</Box>
		</Navbar>
	);
};

export default Header;
