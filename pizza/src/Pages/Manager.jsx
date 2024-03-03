import React, { useState } from 'react';
import '../index.css';
// import Menu from '../components/Menu';
import Pizza from '../Components/Pizza';
import Accordion from '../Components/Accordion';

const Manager = () => {
    const [ingredients, setIngredients] = useState({});

    const updatePizza = (type, items) => {
        const updatedState = {
            ...ingredients,
            [type]: items,
        };
        setIngredients(updatedState);
    };

    const sizes = ['Small - 10', 'Medium - 12', 'Large - 16'];
    const crusts = ['White', 'Wheat', 'Gltn Free'];
    const sauces = ['Marinara'];
    const cheeses = ['Cheddar', 'Mozzarella'];
    const toppings = [
        'Pepperoni',
        'Xtra Pepp.',
        'Sausage',
        'Bacon',
        'Ham',
        'Mushrooms',
        'Onions',
        'Jalapeños',
        'Garlic',
        'Pineapple',
        'Blk. Olives',
        'Anchovies',
        'Spinach'
    ];
    const checkout = ['Delivery', 'Pickup'];

    return (
        <div className='big-container'>
            <div className="menucontainer">
                <Accordion header='Size' options={sizes} expanded={true} funcbuild={updatePizza} />
                <Accordion header='Crust' options={crusts} funcbuild={updatePizza} />
                <Accordion header='Sauce' options={sauces} funcbuild={updatePizza} />
                <Accordion header='Cheese' options={cheeses} funcbuild={updatePizza} />
                <Accordion header='Toppings' options={toppings} multiselect={true} funcbuild={updatePizza} />
                <Accordion header='Checkout' options={checkout} funcbuild={updatePizza} />
            </div>

            <div className="pizzacontainer">
                <Pizza ingredients={ingredients}/>
            </div>
        </div>
    );
};

export default Manager;
