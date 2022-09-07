import React from "react";
import Header from "../../components/header/Header";
import Landing from "../../components/landing/Landing";
import Overview from "../../components/overview/Overview";
import Attribute from "../../components/attribute/Attribute";
import Highlights from "../../components/highlights/Highlights";
import Facilities from "../../components/facilities/Facilities";
import Gallery from "../../components/gallery/Gallery";
import MasterPlan from "../../components/master_plan/MasterPlan";
import Location from "../../components/Location/Location";
import Schedule from "../../components/schedule/Schedule";
import SiteTour from "../../components/site_tour/SiteTour";
const AppLayout = () => {
	return (
		<>
			<Header />
			<Landing />
			<Overview />
			<Attribute />
			<Highlights />
			<Facilities />
			<Gallery />
			<MasterPlan />
			<Location />
			<Schedule />
			<SiteTour />
		</>
	);
};

export default AppLayout;
