// Button.stories.ts
import { Meta, StoryFn } from "@storybook/vue3"
import Button from "./SButton.vue"

const meta: Meta<typeof Button> = {
    title: "Atoms/Button",
    component: Button,
    argTypes: {
        appearance: {
            options: ["primary", "secondary"],
            control: "select",
            defaultValue: "primary",
            table: {
                type: { summary: "select" },
            },
        },
        width: {
            options: ["full", "content"],
            control: "select",
            defaultValue: "content",
            table: {
                type: { summary: "select" },
            },
        },
        rounded: {
            options: ["full", "none", "md"],
            control: "select",
            defaultValue: "full",
            table: {
                type: { summary: "select" },
            },
        },
        default: {
            control: "text",
            description: "Slot content",
            table: {
                type: { summary: "text" },
            },
        },
    },
}

export default meta

const Template: StoryFn = (args) => ({
    components: { Button },
    setup() {
        return { args }
    },
    template: `
        <div style="background-color:#f7f7f7;padding:1rem 2rem">
            <Button v-bind="args" > {{args.default || 'button'}} </Button>
        </div>
    `,
})

export const Primary = Template.bind({})

Template.args = {
    primary: true,
    label: "Button",
}

export const Secondary = Template.bind({})

Secondary.args = {
    appearance: "secondary",
}
