import React from "react";
import "./overview.scss";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import EmailIcon from "@mui/icons-material/Email";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import MessageIcon from "@mui/icons-material/Message";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import {Grid, Stack} from "@mui/material";
import {
	Container,
	Row,
	Col,
	CardBody,
	Card,
	CardTitle,
	CardText,
} from "reactstrap";
import Button from "@mui/material/Button";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import GamepadIcon from "@mui/icons-material/Gamepad";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";
import ExploreIcon from "@mui/icons-material/Explore";
import LocationOnIcon from "@mui/icons-material/LocationOn";
const Overview = () => {
	return (
		<Box
			id="overview"
			style={{
				paddingTop: "4rem",
				paddingBottom: "4rem",
			}}
		>
			<Container>
				<Row>
					<Col lg="6" sm="12" style={{padding: "0 5rem"}}>
						<Card
							body
							className="text-center form_card"
							style={{
								width: "100%",
							}}
						>
							<CardBody>
								<CardTitle className="form_head" tag="h2">
									DLF Gardencity
								</CardTitle>
								<CardText className="form_subhead_1">
									At Sector 93 Gurugram
								</CardText>
								<CardText className="form_subhead_2">
									3 BHK Apartments Starting{" "}
									<span style={{color: "red"}}>₹ 1.25 Cr* Onward</span>
								</CardText>
								<CardText className="form_subhead_3">
									Register Here to Avail Pre-launch Offers!
								</CardText>
								<Box
									sx={{
										"& > :not(style)": {m: 1},
										margin: "5rem 0",
									}}
								>
									<Stack>
										<Box
											sx={{
												display: "flex",
												alignItems: "flex-end",
												width: "100%",
											}}
										>
											<AccountBoxIcon
												sx={{
													mr: 1,
													mt: 3,
													fontSize: "2rem",
													alignSelf: "flex-start",
													color: "#22577a",
												}}
											/>
											<TextField
												id="name"
												label="Name"
												type="text"
												variant="outlined"
												fullWidth
												margin="dense"
												InputProps={{style: {fontSize: 16}}}
												InputLabelProps={{style: {fontSize: 14}}}
											/>
										</Box>
										<Box
											sx={{
												display: "flex",
												alignItems: "flex-end",
												width: "100%",
											}}
										>
											<EmailIcon
												sx={{
													mr: 1,
													mt: 3,
													fontSize: "2rem",
													alignSelf: "flex-start",
													color: "#22577a",
												}}
											/>
											<TextField
												id="email"
												label="Email"
												type="email"
												variant="outlined"
												fullWidth
												margin="dense"
												InputProps={{style: {fontSize: 16}}}
												InputLabelProps={{style: {fontSize: 14}}}
											/>
										</Box>
										<Box
											sx={{
												display: "flex",
												alignItems: "flex-end",
												width: "100%",
											}}
										>
											<PhoneInTalkIcon
												sx={{
													mr: 1,
													mt: 3,
													fontSize: "2rem",
													alignSelf: "flex-start",
													color: "#22577a",
												}}
											/>
											<TextField
												fullWidth
												id="phone"
												label="Phone number"
												type="tel"
												variant="outlined"
												margin="dense"
												InputProps={{style: {fontSize: 16}}}
												InputLabelProps={{style: {fontSize: 14}}}
											/>
										</Box>
										<Box
											sx={{
												display: "flex",
												alignItems: "flex-end",
												width: "100%",
											}}
										>
											<MessageIcon
												sx={{
													mr: 1,
													mt: 3,
													fontSize: "2rem",
													alignSelf: "flex-start",
													color: "#22577a",
												}}
											/>
											<TextField
												fullWidth
												id="message"
												label="Message"
												multiline
												rows={4}
												margin="dense"
												variant="outlined"
												sx={{fontSize: "2rem!important"}}
												InputProps={{style: {fontSize: 16}}}
												InputLabelProps={{style: {fontSize: 14}}}
											/>
										</Box>
									</Stack>
								</Box>
								<Button
									sx={{fontSize: "1.5rem", backgroundColor: "#22577a"}}
									fullWidth
									variant="contained"
								>
									SUBMIT
								</Button>
							</CardBody>
						</Card>
					</Col>
					<Col className="overview-col" lg="6" sm="12">
						<p className="section_name">Overview</p>
						<h2 className="section_major_heading">DLF Gardencity</h2>
						<p>
							Low Rise Condo-Floors at DLF Garden City Enclave in Sector
							93 of Millennium City, Gurgaon, provide investors another
							chance after the tremendous success of Phase II, III, IV
							and Garden City Independent Floors. The leader in the real
							estate market, DLF, has created the exclusive gated
							low-rise neighbourhood known as Garden City Enclave. The
							self-contained city is home to a strong social and
							commercial infrastructure in addition to a wealth of
							natural beauty, including numerous beautiful green gardens.
							Residents of New Gurugram want Independent Floors as their
							ultimate destination.
						</p>
						<Button
							sx={{fontSize: "1.6rem", backgroundColor: "#22577a"}}
							variant="contained"
						>
							DOWNLOAD BROCHURE
						</Button>
					</Col>
				</Row>
				<Row style={{margin: "5rem 0"}}>
					<Grid container>
						<Grid item xs={2}>
							<Box className="prop_item">
								<LocationCityIcon
									sx={{fontSize: "6rem", color: "#57cc99"}}
								/>
								<span className="prop_title">Property Type</span>
								<span className="prop_subtitle">Residential Apts</span>
							</Box>
						</Grid>
						<Grid item xs={2}>
							<Box className="prop_item">
								<GamepadIcon
									sx={{fontSize: "6rem", color: "#57cc99"}}
								/>
								<span className="prop_title">Configuration</span>
								<span className="prop_subtitle">3 + S</span>
							</Box>
						</Grid>
						<Grid item xs={2}>
							<Box className="prop_item">
								<LocalAtmIcon
									sx={{fontSize: "6rem", color: "#57cc99"}}
								/>
								<span className="prop_title">Pricing</span>
								<span className="prop_subtitle">
									₹ 1.25 Cr.* Onwards
								</span>
							</Box>
						</Grid>
						<Grid item xs={2}>
							<Box className="prop_item">
								<PublishedWithChangesIcon
									sx={{fontSize: "6rem", color: "#57cc99"}}
								/>
								<span className="prop_title">Status</span>
								<span className="prop_subtitle">New Launch</span>
							</Box>
						</Grid>
						<Grid item xs={2}>
							<Box className="prop_item">
								<ExploreIcon
									sx={{fontSize: "6rem", color: "#57cc99"}}
								/>
								<span className="prop_title">Rera Approved</span>
								<span className="prop_subtitle">90 of 2021</span>
							</Box>
						</Grid>
						<Grid item xs={2}>
							<Box className="prop_item">
								<LocationOnIcon
									sx={{fontSize: "6rem", color: "#57cc99"}}
								/>
								<span className="prop_title">Location</span>
								<span className="prop_subtitle">90 of 2021</span>
							</Box>
						</Grid>
					</Grid>
				</Row>
			</Container>
		</Box>
	);
};

export default Overview;
