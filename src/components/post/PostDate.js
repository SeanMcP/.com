import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../common/Icon';

const PostDate = ({ className, date, hideIcon }) => {
    return (
        <div className={`PostDate ${className ? className : ''}`}>
            {!hideIcon && (
                <Icon className={'_icon'} icon={'Calendar'} />
            )}
            <time className="_date">{date}</time>
        </div>
    );
};

PostDate.propTypes = {
    date: PropTypes.string.isRequired,
    hideIcon: PropTypes.bool,
    modifier: PropTypes.string
};

export default PostDate;
