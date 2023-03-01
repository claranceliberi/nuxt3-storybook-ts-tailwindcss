// Button.stories.ts
import { Meta, StoryFn } from "@storybook/vue3"
import Button from "./SButton.vue"

export default {
    title: "Atoms/Button",
    component: Button,
} as Meta

const Template: StoryFn = (args) => ({
    components: { Button },
    setup() {
        return { args }
    },
    template: `<Button v-bind="args"  />`,
})

export const Primary = Template.bind({})

Template.args = {
    primary: true,
    label: "Button",
}
