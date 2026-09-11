import React, { useState, useRef } from "react";
import BomItemRow from "./bomitem";

export default function BomList({ initialItems, onUpdate, onDelete , setItems}) {
    const dragItem = useRef();
  const dragOverItem = useRef();

  // Handle drag start
  const handleDragStart = (index) => {
    dragItem.current = index;
  };

  // Handle drag enter
  const handleDragEnter = (index) => {
    dragOverItem.current = index;
  };

  // Handle drop
  const handleDrop = () => {
    const copyListItems = [...initialItems];
    const dragIdx = dragItem.current;
    const hoverIdx = dragOverItem.current;
    const draggedItem = copyListItems[dragIdx];
    copyListItems.splice(dragIdx, 1);
    copyListItems.splice(hoverIdx, 0, draggedItem);
    setItems(copyListItems);
    dragItem.current = null;
    dragOverItem.current = null;
  };

   return (
    <div>
      {initialItems.map((item, index) => (
        <div
          key={item.id}
          draggable
          onDragStart={() => handleDragStart(index)}
          onDragEnter={() => handleDragEnter(index)}
          onDragEnd={handleDrop}
          onDragOver={(e) => e.preventDefault()}
          style={{
            opacity: dragItem.current === index ? 0.5 : 1,
            border: dragOverItem.current === index ? "2px dashed #fbbf24" : "",
          }}
        >
          <BomItemRow
            item={item}
            onUpdate={onUpdate}
            onDelete={onDelete}
            />
            </div>
        ))}
    </div>
    );
}