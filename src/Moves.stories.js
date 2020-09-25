import React from "react";

import Moves from "./Moves";

export default {
  component: Moves,
  title: "Game/Moves",
};

const Template = (args) => <Moves {...args} />;

export const Default = Template.bind({});
Default.args = {
  history: [
    {
      squares: Array(9).fill(null),
      position: null,
    },
    {
      squares: ["O", ...Array(8).fill(null)],
      position: { row: 1, col: 1 },
    },
    {
      squares: ["O", "O", ...Array(7).fill(null)],
      position: { row: 1, col: 2 },
    },
    {
      squares: ["O", "O", "O", ...Array(6).fill(null)],
      position: { row: 1, col: 3 },
    },
  ],
  onClick: () => {},
  currentStep: 3,
};
