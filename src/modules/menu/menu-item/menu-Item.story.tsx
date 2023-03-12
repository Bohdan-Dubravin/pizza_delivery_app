import { ComponentStory, ComponentMeta } from '@storybook/react';
import MenuItem from './menu-item.component';

export default {
  title: 'Modules/MenuItem',
  component: MenuItem,
} as ComponentMeta<typeof MenuItem>;

const values = {};

const Template: ComponentStory<typeof MenuItem> = (args) => (
  <MenuItem {...args} />
);

export const View = Template.bind({});
View.args = {
  imgPath: '/pizza/manhattan.jpeg',
  weight: 555,
  title: 'Pizza manhattan',
  ingredients:
    'Chervony sauce, Mozzarella sir, Chicken fillet, Childish sausages of the Highest grade',
  price: 8.0,
};
