import React from "react";

import Board from "./Board";

export default {
  component: Board,
  title: "Game/Board",
  argTypes: { onClick: { action: "clicked" } },
};

const Template = (args) => <Board {...args} />;

export const Default = Template.bind({});
Default.args = {
  squares: Array(9).fill(null),
};
