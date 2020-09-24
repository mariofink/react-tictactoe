import React from "react";

import Square from "./Square";

export default {
  component: Square,
  title: "Game/Square",
};

const Template = (args) => <Square {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: "O",
  onClick: () => {},
};
