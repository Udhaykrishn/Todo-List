import Button from "./Button";
import { AiFillDelete } from "react-icons/ai";
import { Items, ReactSetState } from "../types/utils";

type ItemsList = {
  items: Items[];
  setItems: ReactSetState<Items[]>;
};

const ItemsList = ({ items, setItems }: ItemsList) => {
  const handleDelete = (id: string) => {
    setItems((prev) => prev.filter((data) => data.id !== id));
  };

  return items.map((data) => (
    <div
      key={data.id}
      className="flex justify-between items-center border border-slate-600 py-2 pl-2 mb-2 mr-1"
    >
      <p>{data.title}</p>
      <Button onClick={() => handleDelete(data.id)}>
        <AiFillDelete />
      </Button>
    </div>
  ));
};

export default ItemsList;
