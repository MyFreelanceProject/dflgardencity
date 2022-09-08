import {Box, Grid} from "@mui/material";
import {Container, Row} from "reactstrap";
import React, {useState} from "react";
import "./gallery.scss";
import gal1 from "../../assets/images/gal1.jpg";
import gal2 from "../../assets/images/gal2.jpg";
import gal3 from "../../assets/images/gal3.jpg";
import gal4 from "../../assets/images/gal4.jpg";
import gal5 from "../../assets/images/gal5.jpg";
import {Stack} from "@mui/system";
import {Carousel} from "react-responsive-carousel";
import CancelIcon from "@mui/icons-material/Cancel";

const images = [gal1, gal2, gal3, gal4, gal5];
const Gallery = () => {
	const [activeSlide, setActiveSlide] = useState(0);
	const [carouseState, setCarouselState] = useState("none");

	const openCarousel = (index) => {
		console.log(index);
		setCarouselState("block");
		setActiveSlide(index);
	};

	return (
		<>
			<Box
				id="gallery"
				style={{
					paddingTop: "10rem",
					paddingBottom: "10rem",
				}}
			>
				<Container>
					<Row>
						<Grid container>
							<Stack>
								<p className="section_name">Gallery</p>
								<h2 className="section_major_heading">
									DLF Gardencity Gallery
								</h2>
							</Stack>
						</Grid>
					</Row>
					<Row>
						<Grid container spacing={2}>
							{images.map((image, ind) => {
								return (
									<Grid
										key={ind}
										item
										sm={12}
										lg={3}
										onClick={() => openCarousel(ind)}
									>
										<img
											className="gallery_image"
											src={image}
											alt="gallery 1"
										/>
									</Grid>
								);
							})}
						</Grid>
					</Row>
				</Container>
			</Box>
			<Box
				className="gallery_carousel"
				sx={{
					top: 0,
					left: 0,
					zIndex: 1040,
					width: "100%",
					height: "100vh",
					display: carouseState,
					position: "fixed",
					alignItems: "center",
					justifyContent: "center",
					background: "rgba(255,255,255,0.9)",
					backdropFilter: "saturate(180%) blur(10px)",
				}}
			>
				<CancelIcon
					sx={{
						fontSize: "2.5rem",
						position: "fixed",
						top: "1.5rem",
						right: "4rem",
						color: "black",
						cursor: "pointer",
						zIndex: 1050,
					}}
					onClick={() => {
						setCarouselState("none");
					}}
				/>
				<Carousel
					width={"100%"}
					centerMode={true}
					showArrows={true}
					showStatus={true}
					showThumbs={false}
					infiniteLoop={false}
					useKeyboardArrows={true}
					selectedItem={activeSlide}
					centerSlidePercentage={100}
				>
					{images.map((image) => {
						return (
							<Box>
								<img
									className="gallery_image"
									src={image}
									alt="gallery 1"
								/>
							</Box>
						);
					})}
				</Carousel>
			</Box>
		</>
	);
};

export default Gallery;
