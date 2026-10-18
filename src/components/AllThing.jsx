import { use, useState } from "react";
import toast from "react-hot-toast";
import Technologies from "./Technologies";
import YourStack from "./YourStack";

const AllThing = ({ dataPromise }) => {
  const technologies = use(dataPromise);
  const [stack, setStack] = useState([]);

  const addToStack = (tech) => {
    if (stack.some((item) => item.id === tech.id)) {
      toast(`${tech.name} is already in your stack`, { icon: "⚠️" });
      return;
    }
    setStack([...stack, tech]);
    toast.success(`${tech.name} added`);
  };

  const removeFromStack = (tech) => {
    setStack(stack.filter((item) => item.id !== tech.id));
    toast(`${tech.name} removed`);
  };

  const removeAll = () => {
    setStack([]);
    toast.success("All removed");
  };

  return (
    <div className="mt-8 flex flex-col lg:flex-row gap-6">
      <Technologies
        technologies={technologies}
        stack={stack}
        onAdd={addToStack}
      />
      <YourStack
        stack={stack}
        onRemove={removeFromStack}
        onRemoveAll={removeAll}
      />
    </div>
  );
};

export default AllThing;
