import { Meta, Story } from "@storybook/react";
import { Icon, iProps } from "../components/buttons/Icon";

export default {
  title: "Icon",
  component: Icon,
} as Meta;

const Template: Story<iProps> = (args) => <Icon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: (
    <>
      <Primary {...Primary.args} />
    </>
  ),
  label: "Primary",
};
