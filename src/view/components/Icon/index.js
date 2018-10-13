import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const Icon = ( { svg } ) => (
	<div className="icon" dangerouslySetInnerHTML={ { __html: svg } } />
);

Icon.propTypes = {
	svg: PropTypes.string.isRequired,
};

export default Icon;
