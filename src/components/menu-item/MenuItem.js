import React from 'react';
import { withRouter } from 'react-router-dom';

import './MenuItem.scss';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
	return (
		<div
			className={`menu-item ${size}`}
			onClick={() => history.push(`${match.path}${linkUrl}`)}
		>
			<div
				style={{
					backgroundImage: `url(${imageUrl})`
				}}
				className="background-image"
			/>
			<div className="content">
				<div className="title">{title}</div>
				<span className="subtitle">SHOP NOW</span>
			</div>
		</div>
	);
};

export default withRouter(MenuItem);
