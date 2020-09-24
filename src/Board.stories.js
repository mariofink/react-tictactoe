import React from "react";

import Board from "./Board";

export default {
  component: Board,
  title: "Board",
};

const Template = (args) => <Board {...args} />;

export const Default = Template.bind({});
Default.args = {
  squares: Array(9).fill(null),
  onClick: () => {},
};
