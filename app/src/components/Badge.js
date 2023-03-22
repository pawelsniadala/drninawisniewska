import React from 'react';
import PropTypes from 'prop-types';

const Badge = ({
    badgeContent,
    badgeMode
}) => (
    <span className={`badge ${badgeMode}`}>
        {badgeContent}
    </span>
);

Badge.propTypes = {
    badgeContent: PropTypes.string.isRequired,
    badgeMode: PropTypes.oneOf(['success', 'warning']).isRequired
};

export default Badge;
