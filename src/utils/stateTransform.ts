import { states } from "./states";

export const StateTransformAcronym = (id: number) => {
  const state = states.find((state) => state.id === id);

  return state?.acronym;
};

export const StateTransformName = (id: number) => {
  const state = states.find((state) => state.id === id);

  return state?.name;
};
