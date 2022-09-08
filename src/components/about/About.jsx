import {Box} from "@mui/system";
import React from "react";
import {Container, Row, Col} from "reactstrap";
import "./about.scss";

const About = () => {
	return (
		<Box
			id="about"
			className="about"
			sx={{
				paddingTop: "4rem",
				paddingBottom: "4rem",
				background: "#000000",
			}}
		>
			<Container>
				<Row>
					<Col lg="12" sm="12">
						<h2 className="section_major_heading">
							About DLF Gardencity
						</h2>
					</Col>
					<Col lg="12" sm="12">
						<p>
							At DLF, they take pride in their uncompromising integrity
							in customer engagement and quality assurance, and
							throughout their 75 years legacy they have made it core
							mission to provide real-estate development, management, and
							investment services of the highest calibre.
						</p>
						<p>
							For those who appreciate privacy and the charm of low-rise
							living, Independent Floors are just the right choice.
							Nestled in DLF Gardencity, DLF City Phase 2 and DLF Alameda
							these elegant residences represent the much-coveted luxury
							and lifestyle that is synonymous with DLF.
						</p>
						<p>
							Disclaimer: This website is only for the purpose of
							providing information About the project. Any information
							which is being provided on this website is not an
							advertisement or a solicitation. The company has not
							verified the information and the compliances of the
							projects. Further, the company has not checked the RERA*
							registration status of the real estate projects listed
							herein. The company does not make any representation in
							regards to the compliances done against these projects.
							Please note that you should make yourself aware about the
							RERA* registration status of the project.
						</p>
					</Col>
				</Row>
			</Container>
		</Box>
	);
};

export default About;
