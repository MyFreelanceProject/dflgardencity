import React from "react";
import {Container, Row, Col, CardBody, Card, CardTitle} from "reactstrap";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import EmailIcon from "@mui/icons-material/Email";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import MessageIcon from "@mui/icons-material/Message";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import {Stack} from "@mui/material";
import Button from "@mui/material/Button";
import "./schedule.scss";

const Schedule = () => {
	return (
		<Box
			id="schedule"
			style={{
				paddingTop: "4rem",
				paddingBottom: "4rem",
				background: "#c7f9cc",
			}}
		>
			<Container>
				<Row>
					<Col lg="12" sm="12">
						<Card
							body
							className="text-center form_card"
							style={{
								width: "100%",
							}}
						>
							<CardBody>
								<CardTitle
									style={{fontSize: "5rem", color: "#22577a"}}
									className="schedule_head"
									tag="h2"
								>
									Schedule a Free Site Visit
								</CardTitle>
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
													mt: 4,
													fontSize: "2rem",
													alignSelf: "flex-start",
													color: "#22577a",
												}}
											/>
											<TextField
												id="name"
												label="Name"
												type="text"
												variant="standard"
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
													mt: 4,
													fontSize: "2rem",
													alignSelf: "flex-start",
													color: "#22577a",
												}}
											/>
											<TextField
												id="email"
												label="Email"
												type="email"
												variant="standard"
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
													mt: 4,
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
												variant="standard"
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
													mt: 4,
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
												variant="standard"
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
				</Row>
			</Container>
		</Box>
	);
};

export default Schedule;
