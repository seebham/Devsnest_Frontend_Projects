import React from "react";
import { useEffect } from "react";

const Quantity = ({ quantity, setter }) => {
  useEffect(() => {
    setter(quantity);
  }, [setter, quantity]);
  const handleDecrement = (action) => {
    if (action === "inc") {
      setter((prev) => {
        if (prev < 20) return prev + 1;
        else return prev;
      });
    } else if (action === "dec") {
      setter((prev) => {
        if (prev > 0) return prev - 1;
        else return prev;
      });
    }
    return;
  };

  const buttonsStyles =
    "h-6 w-6 md:h-8 md:w-8 grid place-items-center bg-white text-black rounded-full";
  return (
    <div className="flex flex-row justify-center items-center gap-4">
      <div className={buttonsStyles} onClick={() => handleDecrement("dec")}>
        {" "}
        -{" "}
      </div>
      <div>{quantity}</div>
      <div className={buttonsStyles} onClick={() => handleDecrement("inc")}>
        +
      </div>
    </div>
  );
};

export default Quantity;
