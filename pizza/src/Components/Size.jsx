import React, { useState, useRef, useEffect } from 'react';

export default function Size({ selectedCrust, handleSizeSelection }) {
 const [selectedSize, setSelectedSize] = useState('Small - 10');
 const [isResizing, setIsResizing] = useState(false);
 const [resizeStartX, setResizeStartX] = useState(0);
 const pizzaRef = useRef(null);

 const updateSize = (newSize) => {
 handleSizeSelection(newSize);
 setSelectedSize(newSize);
};

 useEffect(() => {
    const handleMouseDown = (e) => {
      setIsResizing(true);
      setResizeStartX(e.clientX);
    };

    const handleMouseMove = (e) => {
      if (!isResizing) return;
      const pizza = pizzaRef.current;
      if (!pizza) return;

      const deltaX = e.clientX - resizeStartX;
      const newWidth = pizza.offsetWidth + deltaX;
      const newHeight = pizza.offsetHeight + deltaX; // Assuming square aspect ratio

      // Prevent resizing smaller than the "Small" size
      const minWidth = 100; // Minimum width for "Small" size
      if (newWidth < minWidth) return;

      pizza.style.width = `${newWidth}px`;
      pizza.style.height = `${newHeight}px`;

      setResizeStartX(e.clientX);
    };

    const handleMouseUp = () => {
      setIsResizing(false);
      const pizza = pizzaRef.current;
      if (!pizza) return;

      const sizes = ['Small - 10', 'Medium - 12', 'Large - 16'];
      const widths = [250, 350, 500]; // Example widths for each size
      const currentWidth = pizza.offsetWidth;

      let closestSize = sizes[0];
      let closestWidth = widths[0];
      let minDiff = Math.abs(currentWidth - closestWidth);

      for (let i = 1; i < sizes.length; i++) {
        const diff = Math.abs(currentWidth - widths[i]);
        if (diff < minDiff) {
          minDiff = diff;
          closestSize = sizes[i];
          closestWidth = widths[i];
        }
      }

      // Snap to the closest size
      pizza.style.width = `${closestWidth}px`;
      pizza.style.height = `${closestWidth}px`; // Assuming square aspect ratio
      updateSize(closestSize); // Use updateSize here
    };

    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
 }, [isResizing, resizeStartX, handleSizeSelection]); // Add handleSizeSelection to the dependency array

 return (
    <div>
      <h2>Size</h2>
      {selectedCrust && <p>Selected Crust: {selectedCrust}</p>}
      <div
        ref={pizzaRef}
        className="size-images"
        style={{
          resize: 'both',
          overflow: 'auto',
          maxWidth: '600px',
          maxHeight: '600px',
          position: 'relative',
          width: '300px', // Initial size
          height: '300px', // Initial size
        }}
      >
        <div className="size-indicator" style={{ width: '33.33%', position: 'absolute', top: '0', left: '0' }}></div>
        <div className="size-indicator" style={{ width: '33.33%', position: 'absolute', top: '0', left: '33.33%' }}></div>
        <div className="size-indicator" style={{ width: '33.33%', position: 'absolute', top: '0', left: '66.66%' }}></div>
        <img
          src={selectedCrust === 'White' ? 'white bread copy.png' : 'whole wheat copy.png'}
          alt={`Selected Size: ${selectedSize}`}
          style={{ width: 'auto', height: 'auto', maxWidth: '100%', maxHeight: '100%' }}
        />
      </div>
      {/* <Cheese selectedSize={selectedSize} /> */}
    </div>
 );
}
