import { useState } from "react";
import "./App.css";
import ImageHeader from "./components/ImageHeader";
import Input from "./components/Input";
import Button from "./components/Button";
import { type Items } from "./types/utils";
import ItemsList from "./components/ItemsList";

function App() {
  const [items, setItems] = useState<Items[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setItems((prev) => [
      ...prev,
      { title: inputValue, id: Date.now().toString() },
    ]);
    setInputValue("");
  };

  return (
    <div className="w-full h-[100vh] flex items-center justify-center flex-col">
      <ImageHeader />
      <main className="w-[350px]">
        <form className="mb-5" onSubmit={handleSubmit}>
          <Input
            type="text"
            inputValue={inputValue}
            setInputValue={setInputValue}
          />
          <Button className="bg-gray-700 w-full p-2">Add</Button>
          <section className=" h-52 overflow-y-auto">
            <ItemsList items={items} setItems={setItems} />
          </section>
        </form>
      </main>
    </div>
  );
}

export default App;
