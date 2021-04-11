import React, { useState, useRef } from "react";

function DragNDrop({ data }) {
  const [list, setList] = useState(data);
  const draggingItem = useRef();
  const dragOverItem = useRef();

  const handleDragStart = (e, position) => {
    draggingItem.current = position;
  };

  const handleDragEnter = (e, position) => {
    dragOverItem.current = position;
  };
  
  const handleDragEnd = (e) => {
    const listCopy = [...list];
    const draggingItemContent = listCopy[draggingItem.current];
    listCopy.splice(draggingItem.current, 1);
    listCopy.splice(dragOverItem.current, 0, draggingItemContent);

    draggingItem.current = null;
    dragOverItem.current = null;
    setList(listCopy);
  };
  
  if (!list) return null;

  return (
    <div className="drag-n-drop">
      {list.map((item, i) => (
        <div
          key={item.name}
          onDragStart={(e) => handleDragStart(e, i)}
          onDragEnter={(e) => handleDragEnter(e, i)}
          onDragEnd={handleDragEnd}
          onDragOver={(e) => e.preventDefault()}
          draggable
        >
          {item.name}
        </div>
      ))}
    </div>
  );
}

export default DragNDrop;
