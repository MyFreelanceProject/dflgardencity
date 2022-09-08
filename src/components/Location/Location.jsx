import {Box, Stack} from "@mui/system";
import React from "react";
import "./location.scss";
import {Container, Row, Col} from "reactstrap";
import location from "../../assets/images/location.jpg";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import {Button} from "@mui/material";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
const Location = () => {
	return (
		<Box
			id="location"
			style={{
				paddingTop: "4rem",
				paddingBottom: "4rem",
			}}
		>
			<Container>
				<Row>
					<Col lg="6" sm="12">
						<Box
							sx={{
								display: "flex",
								height: "100%",
								alignItems: "center",
							}}
						>
							<img
								style={{
									width: "100%",
									height: "auto",
									alignSelf: "center",
								}}
								src={location}
								alt="location "
							/>
						</Box>
					</Col>
					<Col lg="6" sm="12">
						<Stack>
							<p className="section_name">Location Advantage</p>
							<h2 className="section_major_heading">
								DLF Gardencity Location
							</h2>
						</Stack>
						<Stack>
							<Box className="locations_cnt">
								<NavigateNextIcon />
								<p className="locations_name">Dps School -10 Min</p>
							</Box>
							<hr />
							<Box className="locations_cnt">
								<NavigateNextIcon />
								<p className="locations_name">
									St. Xavier School - 10 Min
								</p>
							</Box>
							<hr />
							<Box className="locations_cnt">
								<NavigateNextIcon />
								<p className="locations_name">Aarvy Hospital - 5 Min</p>
							</Box>

							<hr />
							<Box className="locations_cnt">
								<NavigateNextIcon />
								<p className="locations_name">
									Genesis Hospital- 10 Min
								</p>
							</Box>

							<hr />
							<Box className="locations_cnt">
								<NavigateNextIcon />
								<p className="locations_name">
									Sapphire Ninety - 6 Min
								</p>
							</Box>

							<hr />
							<Box className="locations_cnt">
								<NavigateNextIcon />
								<p className="locations_name">Iris Broadway- 8 Min</p>
							</Box>
							<hr />
							<Box className="locations_cnt">
								<NavigateNextIcon />
								<p className="locations_name">
									Holiday Inn Hotel - 6 Min
								</p>
							</Box>

							<hr />
							<Box className="locations_cnt">
								<NavigateNextIcon />
								<p className="locations_name">Hyatt Regency - 15 Min</p>
							</Box>
							<Button
								startIcon={<TravelExploreIcon />}
								sx={{
									fontSize: "1.6rem",
									backgroundColor: "#22577a",
									margin: "2rem 0",
								}}
								variant="contained"
							>
								ENQUIRE MORE ABOUT LOCATIONS
							</Button>
						</Stack>
					</Col>
				</Row>
			</Container>
		</Box>
	);
};

export default Location;
