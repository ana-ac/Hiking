import { Args, Meta, Story } from '@storybook/angular';
import { FooterComponent } from '../../lib/common/footer/footer.component';

export default {
  title: 'Common/Footer',
  component: FooterComponent
} as Meta;

export const Primary:Story = (args: Args) => ({
  component: FooterComponent,
  props: args,
});

Primary.args = {
  label: 'Footer'
};
