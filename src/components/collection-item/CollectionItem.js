import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cartActions';

import CustomButton from '../custom-button/CustomButton';

import './CollectionItem.scss';

const CollectionItem = ({ item, addItem }) => {
	const { name, price, imageUrl } = item;
	return (
		<div className="collection-item">
			<div
				className="image"
				style={{
					backgroundImage: `url(${imageUrl})`
				}}
			/>
			<div className="collection-footer">
				<span className="name">{name}</span>
				<div className="price">{price}</div>
			</div>
			<CustomButton onClick={() => addItem(item)} inverted>
				ADD TO CART
			</CustomButton>
		</div>
	);
};

const mapDispatchToProps = dispatch => ({
	addItem: item => dispatch(addItem(item))
});

export default connect(
	null,
	mapDispatchToProps
)(CollectionItem);
