import { ReactSetState } from "../types/utils";

type Input = {
  type: "text" | "checkbox" | "submit";
  inputValue: string;
  setInputValue: ReactSetState<string>;
};

const Input = ({ type, inputValue, setInputValue }: Input) => {
  return (
    <input
      type={type}
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      className="w-full p-2 rounded-sm mb-2"
    />
  );
};

export default Input;
