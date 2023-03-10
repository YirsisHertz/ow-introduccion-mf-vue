import { reactive } from "vue";

export const useCounter = (initialValue: number) => {
  const counter = reactive({
    value: initialValue,
    initialValue,
  });

  const handleIncrease = (value: number) => {
    counter.value += value;
  };

  const reset = () => {
    counter.value = counter.initialValue;
  };

  return {
    counter,
    handleIncrease,
    reset,
  };
};
