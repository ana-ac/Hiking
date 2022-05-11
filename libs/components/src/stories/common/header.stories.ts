import { Args, Meta, Story } from '@storybook/angular';
import { HeaderComponent } from '../../lib/common/header/header.component';

export default {
  title: 'Common/Header',
  component: HeaderComponent
} as Meta;

export const Primary:Story = (args: Args) => ({
  component: HeaderComponent,
  props: args,
});

Primary.args = {
  label: 'Header'
};
