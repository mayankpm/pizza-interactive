import React, { useState, useEffect } from 'react';
import '../index.css';
import Ingredient from './Ingredient';
import PropTypes from 'prop-types';
// import { FaChevronDown } from 'react-icons/fa';

const Accordion = ({ header, options, expanded: initialExpanded, multiselect, funcbuild }) => {
    const [expanded, setExpanded] = useState(initialExpanded);
    const [activeitems, setActiveitems] = useState([]);

    const handleExpand = () => {
        setExpanded(!expanded);
    };

    const buttonsToggle = (option) => {
        let localactiveitems = [];
        if (!activeitems.includes(option)) {
            if (multiselect) {
                localactiveitems = [...activeitems, option];
            } else {
                localactiveitems = [option];
            }
        } else {
            localactiveitems = activeitems.filter((item) => item !== option);
        }

        setActiveitems(localactiveitems);
    };

    const handleDragStart = (e, option) => {
        e.dataTransfer.setData('option', option);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDrop = (e) => {
        const option = e.dataTransfer.getData('option');
        buttonsToggle(option);
    };

    useEffect(() => {
        funcbuild(header, activeitems);
    }, [activeitems]);

    const listItems = options.map((option) => (
        <li key={option}>
            <Ingredient name={option} isActive={activeitems.includes(option)} clickActive={buttonsToggle} draggable
                          onDragStart={(e) => handleDragStart(e, option)} />
        </li>
    ));

    return (
        <>
            <div className="custom-card-header">
                <h2 className={`noselect ${expanded && 'h2active'}`} onClick={handleExpand}>
                    {header}
                    {/* <FaChevronDown className={`icon-right ${!expanded && 'closed'}`} size={15} /> */}
                </h2>
                <div className={`panel ${!expanded && 'closed'}`} onDragOver={handleDragOver} onDrop={handleDrop}>
                    <ul className="ingredientcontainer">{listItems}</ul>
                </div>
            </div>
        </>
    );
};

Accordion.propTypes = {
    header: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    expanded: PropTypes.bool,
    multiselect: PropTypes.bool,
    funcbuild: PropTypes.func.isRequired,
};

Accordion.defaultProps = {
    expanded: false,
    multiselect: false,
};

export default Accordion;
