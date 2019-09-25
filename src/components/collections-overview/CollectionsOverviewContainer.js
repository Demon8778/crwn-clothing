import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { selectIsCollectionFetching } from '../../redux/shop/shopSelectors';

import withSpinner from '../../components/withSpinner/withSpinner';
import CollectionsOverview from './CollectionsOverview';

const mapStateToProps = createStructuredSelector({
	isLoading: selectIsCollectionFetching
});

const CollectionsOverViewContainer = compose(
	connect(mapStateToProps),
	withSpinner
)(CollectionsOverview);

export default CollectionsOverViewContainer;
