import {Box, Stack} from "@mui/system";
import React from "react";
import {Row, Container} from "reactstrap";
import ReactPlayer from "react-player";
const SiteTour = () => {
	return (
		<Box
			id="sitetour"
			style={{
				paddingTop: "4rem",
				paddingBottom: "4rem",
				height: "90vh",
			}}
		>
			<Container>
				<Row>
					<Stack>
						<p className="section_name">Virtual Site Tour</p>
						<h2 className="section_major_heading">
							DLF Gardencity Virtual Site Tour
						</h2>
					</Stack>
				</Row>

				<Box
					sx={{
						width: "100%",
						display: "flex",
						justifyContent: "center",
						margin: "4rem 0",
						height: "50vh",
					}}
				>
					<ReactPlayer
						width={"70%"}
						height={"100%"}
						controls={true}
						url="https://youtu.be/HxbM-aTn8GM"
					/>
				</Box>
			</Container>
		</Box>
	);
};

export default SiteTour;
