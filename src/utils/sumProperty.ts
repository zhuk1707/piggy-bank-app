import type {Goal} from "../main.tsx";


const sumProperty = (array: Goal[], property: keyof Goal): number => {
  return array.reduce((total, item) => {
    const value = item[property];
    return typeof value === "number" ? total + value : total;
  }, 0);
};


export default sumProperty;


