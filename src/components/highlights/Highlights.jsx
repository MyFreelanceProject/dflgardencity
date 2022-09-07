import React from "react";
import "./highlights.scss";
import {Container, Row, Col} from "reactstrap";
import {Box, Stack} from "@mui/system";
import {Button} from "@mui/material";
import home from "../../assets/images/home.jpg";

const Highlights = () => {
	return (
		<Box
			style={{
				paddingTop: "10rem",
				paddingBottom: "10rem",
			}}
		>
			<Container>
				<Row>
					<Col lg="6" sm="12">
						<p className="section_name">Highlights</p>
						<h2 className="section_major_heading">
							DLF Gardencity Highlights
						</h2>
						<Stack sx={{margin: "3rem 0"}}>
							<p>
								<strong>Design: </strong>Low rise independent floors.
							</p>
							<hr />
							<p>
								<strong>Security: </strong>
								CCTV coverage in parking areas and the entrance lobby.
							</p>
							<hr />
							<p>
								<strong>Greenery: </strong> Lush greenery with parks and
								tree-lined avenues.
							</p>
							<hr />
							<p>
								<strong>Connectivity: </strong> Well-developed internal
								roads in dlf gardencity connecting to nearby
								expressways.
							</p>
							<hr />
							<p>Limited edition floors in Sector 93 Gurgaon.</p>

							<Button
								sx={{
									fontSize: "1.6rem",
									backgroundColor: "#22577a",
									marginTop: "4rem",
								}}
								variant="contained"
							>
								KNOW MORE
							</Button>
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
							src={home}
							alt="house"
						/>
					</Col>
				</Row>
			</Container>
		</Box>
	);
};

export default Highlights;
