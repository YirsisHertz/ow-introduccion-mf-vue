import { reactive } from "vue";
import { increast } from "../helpers/increase";

export const useCounter = (initialValue: number) => {
  const counter = reactive({
    count: initialValue,
    initialValue,
  });

  const handleClick = () => {
    counter.count = increast(counter.count);
  };

  const reset = () => {
    counter.count = counter.initialValue;
  };

  return {
    counter,
    handleIncrease: handleClick,
    reset,
  };
};
