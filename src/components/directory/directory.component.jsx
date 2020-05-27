import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';

const Directory = ({ sections }) => (
    <div className='directory-menu'>
        {
            sections.map(({ id, ...sectionProps }) => (
                <MenuItem key={id} {...sectionProps}></MenuItem>
            ))
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);