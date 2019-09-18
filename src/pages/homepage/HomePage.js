import React from 'react';

import Directory from '../../components/directory/Directory';
import { HomePageContainer } from './HomePage.styles';
// import './HomePage.scss';

const HomePage = () => (
	<HomePageContainer className="homepage">
		<Directory />
	</HomePageContainer>
);

export default HomePage;
