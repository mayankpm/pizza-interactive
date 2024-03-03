import React, {Suspense} from 'react';

export default function Toppings({ selectedCrust, selectedSize, selectedCheese, handleToppingAdded }) {
 const handleDragStart = (e, toppingName) => {
    e.dataTransfer.setData('text/plain', toppingName);
 };

 const handleDragEnd = (e) => {
    const toppingName = e.dataTransfer.getData('text/plain');
    handleToppingAdded(toppingName);
    e.dataTransfer.clearData();
 };

 const handleTouchStart = (e, toppingName) => {
    e.preventDefault();
    handleToppingAdded(toppingName);
 };

 return (
    <>
          <Suspense fallback={<div>Loading...</div>}>
      <div className="flex flex-wrap">
        <div className="w-1/4 h-16 object-cover cursor-grab" draggable="true" onDragStart={(e) => handleDragStart(e, 'Pepperoni')} onDragEnd={handleDragEnd} onTouchStart={(e) => handleTouchStart(e, 'Pepperoni')} data-type="topping">
          <img className="w-full h-full object-cover" src="public\pepperoni.png" alt="Pepperoni" />
        </div>
        <div className="w-1/4 h-16 object-cover cursor-grab" draggable="true" onDragStart={(e) => handleDragStart(e, 'Mushrooms')} onDragEnd={handleDragEnd} onTouchStart={(e) => handleTouchStart(e, 'Mushrooms')} data-type="topping">
          <img className="w-full h-full object-cover" src="public\mushroom.png" alt="Mushrooms" />
        </div>
        <div className="w-1/4 h-16 object-cover cursor-grab" draggable="true" onDragStart={(e) => handleDragStart(e, 'Onions')} onDragEnd={handleDragEnd} onTouchStart={(e) => handleTouchStart(e, 'Onions')} data-type="topping">
          <img className="w-full h-full object-cover" src="public\onion.png" alt="Onions" />
        </div>
        <div className="w-1/4 h-16 object-cover cursor-grab" draggable="true" onDragStart={(e) => handleDragStart(e, 'Jalapeños')} onDragEnd={handleDragEnd} onTouchStart={(e) => handleTouchStart(e, 'Jalapeños')} data-type="topping">
          <img className="w-full h-full object-cover" src="public\jalapeno.png" alt="Jalapeños" />
        </div>
        <div className="w-1/4 h-16 object-cover cursor-grab" draggable="true" onDragStart={(e) => handleDragStart(e, 'Garlic')} onDragEnd={handleDragEnd} onTouchStart={(e) => handleTouchStart(e, 'Garlic')} data-type="topping">
          <img className="w-full h-full object-cover" src="public\garlic.png" alt="Garlic" />
        </div>
        <div className="w-1/4 h-16 object-cover cursor-grab" draggable="true" onDragStart={(e) => handleDragStart(e, 'Pineapple')} onDragEnd={handleDragEnd} onTouchStart={(e) => handleTouchStart(e, 'Pineapple')} data-type="topping">
          <img className="w-full h-full object-cover" src="public\pineapple.png" alt="Pineapple" />
        </div>
        <div className="w-1/4 h-16 object-cover cursor-grab" draggable="true" onDragStart={(e) => handleDragStart(e, 'Spinach')} onDragEnd={handleDragEnd} onTouchStart={(e) => handleTouchStart(e, 'Spinach')} data-type="topping">
          <img className="w-full h-full object-cover" src="public\spinach.png" alt="Spinach" />
        </div>
      </div>
      </Suspense>
    </>
  );
}
