/* eslint-disable no-undef */
import { shallowMount, mount } from '@vue/test-utils';
import flushPromises from 'flush-promises';
import ProjectFilter from '../ProjectFilter.vue';

const projects = [
  { text: 'project 1', value: 'id 1' },
];

describe('ProjectFilter', () => {
  const wrapper = shallowMount(ProjectFilter, {
    stubs: ['v-toolbar', 'v-autocomplete'],
    propsData: {
      projects,
    },
  });

  // it('renders correctly', () => {
  //   expect(wrapper.html()).toMatchSnapshot();
  // });
  it('map projects to items', () => {
    const { items } = wrapper.find('v-autocomplete-stub').attributes();
    console.log(items);
    expect(items.length).toEqual(projects.length);
  });
});
