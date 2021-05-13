import React, { useState, useRef } from 'react';
// eslint-disable-next-line react/prop-types
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

  const handleDragEnd = () => {
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
    <div>
      <table className="drag-N-drop">
        <thead className="dragebble">
          {list.map((item, i) => (
            <tr
              key={item.name}
              onDragStart={(e) => handleDragStart(e, i)}
              onDragEnter={(e) => handleDragEnter(e, i)}
              onDragEnd={handleDragEnd}
              onDragOver={(e) => e.preventDefault()}
              draggable
            >
              <td key={item.id}>{item.id}</td>
              <td key={item.year}>{item.year}</td>
              <td key={item.name}>{item.name}</td>
            </tr>
          ))}
        </thead>
      </table>
    </div>
  );
}

export default DragNDrop;
