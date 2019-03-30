import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import HelloWorld from '@/packages/components/hello-world/index.vue';

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg },
    });
    expect(wrapper.text()).to.include(msg);
  });
});
