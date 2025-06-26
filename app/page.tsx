"use client";

import { useState } from "react";
import TextInput from "../components/TextInput";
import Button from "../components/button";
import TodoItem from "../components/TodoItem";

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState<string[]>([]);

  const handleAddTodo = () => {
    if (inputValue.trim() === "") return;
    setTodos([...todos, inputValue]);
    setInputValue("");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded shadow">
      <h1 className="text-2xl font-bold mb-4">To-Do List</h1>
      <TextInput value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <Button text="Add" onClick={handleAddTodo} />
      <ul className="mt-4">
  {todos.map((todo, index) => (
    <TodoItem
      key={index}
      text={todo}
      onDelete={() => {
        const updatedTodos = [...todos];
        updatedTodos.splice(index, 1);
        setTodos(updatedTodos);
      }}
    />
  ))}
</ul>

    </div>
  );
}
