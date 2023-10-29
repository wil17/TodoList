import React, { useState } from 'react';

const TodoItem = ({ todo, onToggle, onDelete, onEdit }) => {
  const [editing, setEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);

  const handleEdit = () => {
    onEdit(todo.id, editedText);
    setEditing(false);
  };

  return (
    <div className="flex items-center border border-gray-300 rounded-md p-2 mb-4 w-full">
      <input 
        type="checkbox" 
        checked={todo.completed} 
        onChange={onToggle} 
        className="mr-4 transform scale-125" 
      />
      <span className={`flex-1 border-b ${todo.completed ? 'line-through' : 'none'} py-2`}>
        {editing ? (
          <input 
            type="text" 
            value={editedText} 
            onChange={(e) => setEditedText(e.target.value)} 
            className="w-full border-none outline-none" 
          />
        ) : (
          todo.text
        )}
      </span>
      <div className="whitespace-no-wrap">
        {editing ? (
          <button onClick={handleEdit} className="bg-blue-500 text-white mr-2 px-3 py-1 rounded-md text-sm">Simpan</button>
        ) : (
          <button onClick={() => setEditing(true)} className="bg-blue-500 text-white mr-2 px-3 py-1 rounded-md text-sm">Edit</button>
        )}
        <button onClick={onDelete} className="bg-red-500 text-white px-3 py-1 rounded-md text-sm">Hapus</button>
      </div>
    </div>
  );  
};

export default TodoItem;