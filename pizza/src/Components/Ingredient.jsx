// Ingredient.jsx
import React from 'react';
import PropTypes from 'prop-types';

const Ingredient = ({ name, clickActive, isActive }) => {
    return (
        <button
            onClick={() => clickActive(name)}
            className={`btn ${isActive ? 'dark-btn-toggled' : 'dark-btn'}`}
        >
            {name}
        </button>
    );
};

Ingredient.propTypes = {
    name: PropTypes.string.isRequired,
    clickActive: PropTypes.func.isRequired,
    isActive: PropTypes.bool.isRequired,
};

export default Ingredient;
