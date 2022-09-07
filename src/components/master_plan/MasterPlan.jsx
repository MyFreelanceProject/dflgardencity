import {Box} from "@mui/system";
import React from "react";
import {Container, Row, Col} from "reactstrap";
import "./masterplan.scss";
import masterplan from "../../assets/images/master_plan.jpg";
import {Button, Stack} from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
const MasterPlan = () => {
	return (
		<Box
			style={{
				paddingTop: "4rem",
				paddingBottom: "4rem",
				background: "#c7f9cc",
			}}
		>
			<Container>
				<Row>
					<Stack>
						<p className="section_name">Gallery</p>
						<h2 className="section_major_heading">
							DLF Gardencity Gallery
						</h2>
					</Stack>
				</Row>
				<Row style={{margin: "3rem 0"}}>
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<Col lg="6" sm="12">
							<img
								src={masterplan}
								style={{width: "100%", height: "auto"}}
								alt="masterplan"
							/>
						</Col>

						<Button
							startIcon={<CallIcon />}
							sx={{
								fontSize: "1.6rem",
								backgroundColor: "#22577a",
								margin: "2rem 0",
							}}
							variant="contained"
						>
							CALL (+91) 9999999999
						</Button>
					</Box>
				</Row>
			</Container>
		</Box>
	);
};

export default MasterPlan;
