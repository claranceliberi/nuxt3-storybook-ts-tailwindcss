// Button.stories.ts
import { Meta, Story } from "@storybook/vue3";
import Button from "./Button.vue";

export default {
  component: Button,
} as Meta;

const Template : Story = (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `<Button v-bind="args"  />`,
  });

export const Primary = Template.bind({});

Template.args = {
  primary: true,
  label: "Button",
};
