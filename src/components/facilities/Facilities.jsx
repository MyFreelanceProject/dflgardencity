import React from "react";
import "./facilities.scss";
import {Container, Row, Col} from "reactstrap";
import {Box} from "@mui/system";
import BoltIcon from "@mui/icons-material/Bolt";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import SecurityIcon from "@mui/icons-material/Security";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import ForestIcon from "@mui/icons-material/Forest";
import SportsHandballIcon from "@mui/icons-material/SportsHandball";

const Facilities = () => {
	return (
		<Box
			id="facilities"
			style={{
				paddingTop: "10rem",
				paddingBottom: "10rem",
				background: "#c7f9cc",
			}}
		>
			<Container>
				<Row>
					<Col lg="12" sm="12">
						<p className="section_name">Amenities & Facilities</p>
						<h2 className="section_major_heading">
							DLF Gardencity Amenities
						</h2>
					</Col>
				</Row>
				<Row className="facilities_row_one">
					<Col className="facilities_col" lg="3" sm="6">
						<Box className="attribute_item">
							<BoltIcon className="attribute_logo" />
							<span className="attribute_name">100% Power Backup</span>
						</Box>
					</Col>
					<Col className="facilities_col" lg="3" sm="6">
						<Box className="attribute_item">
							<CameraAltIcon className="attribute_logo" />
							<span className="attribute_name">
								Gated Secured Community
							</span>
						</Box>
					</Col>
					<Col className="facilities_col" lg="3" sm="6">
						<Box className="attribute_item">
							<BeachAccessIcon className="attribute_logo" />
							<span className="attribute_name">
								Gated Secured Community
							</span>
						</Box>
					</Col>
					<Col className="facilities_col" lg="3" sm="6">
						<Box className="attribute_item">
							<SecurityIcon className="attribute_logo" />
							<span className="attribute_name">3 Tier Security</span>
						</Box>
					</Col>
				</Row>
				<Row className="facilities_row_two">
					<Col className="facilities_col" lg="3" sm="6">
						<Box className="attribute_item">
							<DirectionsRunIcon className="attribute_logo" />
							<span className="attribute_name">Jogging Tracks</span>
						</Box>
					</Col>
					<Col className="facilities_col" lg="3" sm="6">
						<Box className="attribute_item">
							<ManageAccountsIcon className="attribute_logo" />
							<span className="attribute_name">
								Professional Maintenance
							</span>
						</Box>
					</Col>
					<Col className="facilities_col" lg="3" sm="6">
						<Box className="attribute_item">
							<ForestIcon className="attribute_logo" />
							<span className="attribute_name">Landscaped Spaces</span>
						</Box>
					</Col>
					<Col className="facilities_col" lg="3" sm="6">
						<Box className="attribute_item">
							<SportsHandballIcon className="attribute_logo" />
							<span className="attribute_name">Kids Play Area</span>
						</Box>
					</Col>
				</Row>
			</Container>
		</Box>
	);
};

export default Facilities;
