import {Box} from "@mui/system";
import React from "react";
import "./landing.scss";
import {UncontrolledCarousel} from "reactstrap";
import image1 from "../../assets/images/1.jpg";
import image2 from "../../assets/images/2.jpg";
import image3 from "../../assets/images/3.jpg";
import image4 from "../../assets/images/4.jpg";

const Landing = () => {
	return (
		<Box id="landing" sx={{maxHeight: "70vh", position: "relative"}}>
			<Box
				className="overlay"
				component={"div"}
				sx={{
					width: "100%",
					height: "100%",
					position: "absolute",
					top: 0,
					left: 0,
					background: "rgba(0,0,0,0.2)",
					zIndex: 1,
					padding: "20rem 20rem",
				}}
			>
				<h1>Lorem Ipsum</h1>
				<h4>Onsectetur adipiscing elit</h4>
			</Box>
			<UncontrolledCarousel
				items={[
					{
						altText: "Slide 1",
						caption: "Slide 1",
						key: 1,
						src: image1,
					},
					{
						altText: "Slide 2",
						caption: "Slide 2",
						key: 2,
						src: image2,
					},
					{
						altText: "Slide 3",
						caption: "Slide 3",
						key: 3,
						src: image3,
					},
					{
						altText: "Slide 4",
						caption: "Slide 4",
						key: 4,
						src: image4,
					},
				]}
			/>
		</Box>
	);
};

export default Landing;
