import { FC } from "react";

type TextInputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const TextInput: FC<TextInputProps> = ({ value, onChange }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      className="border border-gray-300 px-2 py-1 rounded w-full mb-2"
      placeholder="Enter a to-do"
    />
  );
};

export default TextInput;
