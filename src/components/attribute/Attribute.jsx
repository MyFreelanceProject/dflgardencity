import React from "react";
import "./attribute.scss";
import {Container, Row, Col} from "reactstrap";
import {Box, Stack} from "@mui/system";
import couple from "../../assets/images/couple.jpg";

const Attribute = () => {
	return (
		<Box
			id="attribute"
			style={{
				paddingTop: "10rem",
				paddingBottom: "10rem",
				background: "#c7f9cc",
			}}
		>
			<Container>
				<Row>
					<Col lg="6" sm="12">
						<p className="section_name">Key Attributes</p>
						<h2 className="section_major_heading">
							DLF Gardencity Key Attributes
						</h2>
						<Stack sx={{margin: "3rem 0"}}>
							<p>
								Garden City Enclave: *Good Connectivity to Dwarka
								Expressway via Pataudi road within 1.8 km *
							</p>
							<hr />
							<p>
								<strong>
									NEVER BEFORE & for the first time ever 3 BHK +
									Servant
								</strong>
								options, well connected with CPR and 5.2 km from NH-8
								!!!
							</p>
							<hr />
							<p>
								GC-93: what could be better than being on the * DLF
								Floors- Lifetime Maintenance* , access to multiple
								curated and maintained parks
							</p>
							<hr />
							<p>
								GC-93: Once again coming with our *most popular sized
								floors on 179 sq yards
							</p>
							<hr />
							<p style={{textAlign: "center"}}>
								<strong>
									Submit EOI Only Rs 5 Lakhs & Block Your Exclusive
									Unit
								</strong>
							</p>
							<p style={{textAlign: "center"}}>
								<span style={{color: "red"}}>Hurry up!! </span>Limited
								Stock with Attractive Pricing
							</p>
						</Stack>
					</Col>
					<Col
						lg="6"
						sm="12"
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<img
							style={{width: "90%", height: "auto"}}
							src={couple}
							alt="couple house"
						/>
					</Col>
				</Row>
			</Container>
		</Box>
	);
};

export default Attribute;
