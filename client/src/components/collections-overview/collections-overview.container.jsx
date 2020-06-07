import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import WithSpinner from '../with-spinner/with-spinner.component';
import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';
import collectionsOverviewComponent from './collections-overview.component';
import { compose } from 'redux';

const mapStateToProps = createStructuredSelector({
    isFetching: selectIsCollectionFetching,
});

const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner)
    (collectionsOverviewComponent);

export default CollectionsOverviewContainer;
