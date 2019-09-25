import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsCollectionsLoaded } from '../../redux/shop/shopSelectors';

import withSpinner from '../../components/withSpinner/withSpinner';
import CollectionPage from './CollectionPage';

const mapStateToProps = createStructuredSelector({
	isLoading: state => !selectIsCollectionsLoaded(state)
});

const CollectionPageContainer = compose(
	connect(mapStateToProps),
	withSpinner
)(CollectionPage);

export default CollectionPageContainer;
