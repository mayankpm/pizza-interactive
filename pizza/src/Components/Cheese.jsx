// Cheese.jsx
import React, { useState } from 'react';

export default function Cheese({ selectedCrust, selectedSize, handleCheeseSelection }) {
 const [selectedCheese, setSelectedCheese] = useState(null);

 const handleCheeseClick = (cheeseType) => {
    setSelectedCheese(cheeseType);
    handleCheeseSelection(cheeseType);
 };

 const handleDragStart = (e, cheeseType) => {
    e.dataTransfer.setData('text/plain', cheeseType);
 };

 const handleTouchStart = (e, cheeseType) => {
  e.preventDefault();
  setSelectedCheese(cheeseType);
  handleCheeseSelection(cheeseType);
};

const handleTouchEnd = (e) => {
  e.preventDefault();
  const toppingName = e.target.dataset.topping;
  handleToppingAdded(toppingName);
};

 return (
    <>
      {/* <div>Cheese</div>
      {selectedCrust && <p>Selected Base: {selectedCrust}</p>}
      {selectedSize && <p>Selected Size: {selectedSize}</p>} */}
      <button
        draggable
        onDragStart={(e) => handleDragStart(e, 'Cheddar')}
        onTouchStart={(e) => handleTouchStart(e, 'Cheddar')}
        className={selectedCheese === 'Cheddar' ? 'selected' : ''}
        onClick={() => handleCheeseClick('Cheddar')}
        data-cheese="Cheddar" 
        data-type="cheese"// Add this line
      >
        <img loading="lazy" src='cheddar.png' alt='Cheddar' />
      </button>
      <button
        draggable
        onTouchStart={(e) => handleTouchStart(e, 'Mozzarella')}
        onDragStart={(e) => handleDragStart(e, 'Mozzarella')}
        className={selectedCheese === 'Mozzarella' ? 'selected' : ''}
        onClick={() => handleCheeseClick('Mozzarella')}
        data-cheese="Mozzarella"
        data-type="cheese"
      >
        <img loading="lazy" src='mozzarella.png' alt='Mozzarella' />
      </button>
    </>
 );
}
