// Choices.jsx
import React, { useState, useEffect, Suspense } from 'react';
import Toppings from './Toppings';
import Size from './Size';
import Crust from './Crust';
import Cheese from './Cheese';
import Pizza from './Pizza';
import '../Styles/Choices.css';

export default function Choices() {
  const [currentComponent, setCurrentComponent] = useState(0);
  const [selectedCrust, setSelectedCrust] = useState(null);
  const [selectedBase, setSelectedBase] = useState(null);
  const [selectedSize, setSelectedSize] = useState('Small - 10'); // Default size
  const [selectedCheese, setSelectedCheese] = useState(null);

  

  const [selectedToppings, setSelectedToppings] = useState([]);

  const handleDropToppings = (e) => {
    e.preventDefault();
    const toppingName = e.dataTransfer.getData('text/plain');
   
    // Check if the topping is neither 'Cheddar' nor 'Mozzarella'
    if (toppingName !== 'Cheddar' && toppingName !== 'Mozzarella') {
       // If the topping is not 'Cheddar' or 'Mozzarella', add it to the selected toppings
       setSelectedToppings([...selectedToppings, toppingName]);
       updatePizza('toppings', [...selectedToppings, toppingName]);
    } else {
       // If the topping is 'Cheddar' or 'Mozzarella', reject the drop
       e.stopPropagation();
    }
   };
   
  
  const handleDrop = (e) => {
    e.preventDefault();
    const itemType = e.dataTransfer.getData('text/plain');
   
    // Check if the item being dropped is a cheese
    if (itemType.includes('Mozzarella') || itemType.includes('Cheddar')) {
       const cheeseType = itemType.replace('Cheese:', ''); // Assuming the data is in the format "Cheese:type"
       setSelectedCheese(cheeseType);
       handleCheeseSelection(cheeseType);
    }else if (itemType !== 'Cheddar' && itemType !== 'Mozzarella') {
      // If the topping is not 'Cheddar' or 'Mozzarella', add it to the selected toppings
      setSelectedToppings([...selectedToppings, itemType]);
      updatePizza('toppings', [...selectedToppings, itemType]);
   } else {
       // If the item is not a cheese, reject the drop
       e.stopPropagation();
    }
   };

   

  
   
   
   
   
  const handleDeleteTopping = (toppingName) => {
    const updatedToppings = selectedToppings.filter(topping => topping !== toppingName);
    setSelectedToppings(updatedToppings);
    updatePizza('toppings', updatedToppings);
  };
  
 
 const handleDeleteCheese = () => {
    setSelectedCheese(null);
 };


  const [errorMessage, setErrorMessage] = useState(null);

  const nextComponent = () => {
    if (currentComponent === 0 && selectedCrust === null) {
      setErrorMessage("Please select a base before proceeding.");
      return;
    }

    if (currentComponent < components.length - 1) {
      setCurrentComponent(currentComponent + 1);
      setErrorMessage(null);
    }
  }

  const previousComponent = () => {
    if (currentComponent > 0) {
      setCurrentComponent(currentComponent - 1);
      setErrorMessage(null);
    }
  }

  const handleCrustSelection = (crust) => {
    setSelectedCrust(crust);
    updatePizza('crust', crust);
  }

  const handleBaseSelection = (base) => {
    setSelectedBase(base);
  }

  const handleSizeSelection = (size) => {
    setSelectedSize(size);
    updatePizza('size', size);
  }

  const handleCheeseSelection = (cheese) => {
    setSelectedCheese(cheese);
    updatePizza('cheese', cheese);
  }

  

  const components = [
    <Crust key={0} handleCrustSelection={handleCrustSelection} />,
    <Size key={1} selectedCrust={selectedCrust} handleSizeSelection={handleSizeSelection} />,
    <Cheese key={2} selectedCrust={selectedCrust} selectedSize={selectedSize} handleCheeseSelection={handleCheeseSelection} />,
    <Toppings key={3} selectedCrust={selectedCrust} selectedSize={selectedSize} selectedCheese={selectedCheese} />
  ];

  const [ingredients, setIngredients] = useState({});

  useEffect(() => {
    // This code runs whenever `ingredients` changes
    console.log('Ingredients updated:', ingredients);
    // You can call updatePizza or any other function here if needed
  }, [ingredients]); // Dependency array with `ingredients`
  

  const updatePizza = (type, items) => {
    // Ensure items is always an array
    const itemsArray = Array.isArray(items) ? items : [items];
   
    setIngredients(prevIngredients => ({
       ...prevIngredients,
       [type]: itemsArray,
    }));
   };
   

   
   


   return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className='choices'>
        <div className='component-wrapper'>
          {React.cloneElement(components[currentComponent], {
            selectedCrust,
            selectedSize,
            selectedCheese,
            selectedToppings,
            handleCrustSelection,
            handleSizeSelection,
            handleCheeseSelection,
            // handleDropToppings,
            handleDeleteTopping,
            handleDrop,
            updatePizza
          })}
          {errorMessage && currentComponent === 0 && <p className="error-msg">{errorMessage}</p>}
        </div>
      </div>

      <button className='back-btn' onClick={previousComponent}>Back</button>
      <button className='next-btn' onClick={nextComponent}>Next</button>

      <div
        className='drop'
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
        onTouchStart={(e) => handleTouchStart(e)}
        onTouchMove={(e) => handleTouchMove(e)}
        onTouchEnd={(e) => handleTouchEnd(e)}
      >
        <Pizza ingredients={ingredients} />
      </div>
    </Suspense>
  );
}