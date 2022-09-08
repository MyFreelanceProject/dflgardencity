import {Box} from "@mui/material";
import React from "react";
import "./footer.scss";
import {Container} from "reactstrap";

const Footer = () => {
	return (
		<Box className="footer">
			<Container>
				<p className="credits">
					© 2022 All Right Reserved | Designed By Anuj Kumar
				</p>
			</Container>
		</Box>
	);
};

export default Footer;
