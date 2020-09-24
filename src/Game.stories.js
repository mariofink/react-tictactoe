import React from "react";
import { Provider } from "react-redux";
import { action } from "@storybook/addon-actions";
import Game from "./Game";

// A super-simple mock of a redux store
const store = {
  getState: () => {
    return {
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
      xIsNext: true,
      stepNumber: 3,
    };
  },
  subscribe: () => 0,
  dispatch: action("dispatch"),
};

export default {
  component: Game,
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
  title: "Game",
};

const Template = (args) => <Game {...args} />;

export const Default = Template.bind({});
