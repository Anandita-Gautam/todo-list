import { FC } from "react";

type TodoItemProps = {
  text: string;
  onDelete: () => void;
};

const TodoItem: FC<TodoItemProps> = ({ text, onDelete }) => {
  return (
    <li className="py-1 flex justify-between items-center">
      <span>✅ {text}</span>
      <button
        onClick={onDelete}
        className="ml-2 px-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
