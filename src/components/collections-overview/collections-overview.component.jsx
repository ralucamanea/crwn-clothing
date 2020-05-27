import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import './collections-overview.styles.scss';
import CollectionPreview from '../collection-preview/collection-preview.component';
import { selectShopCollections } from '../../redux/shop/shop.selectors';

const CollectionsOverview = ({collections}) => (
    <div className='collections-preview'>
         {collections.map(({ id, ...otherCollectionProps }) => (
            <CollectionPreview key={id} {...otherCollectionProps}>
            </CollectionPreview>
        ))}
    </div>
)


const mapStateToProps = createStructuredSelector({
    collections: selectShopCollections
})

export default connect(mapStateToProps)(CollectionsOverview);