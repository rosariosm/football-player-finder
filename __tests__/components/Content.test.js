import React from 'react';
import { shallow, mount } from 'enzyme';

import Content from '../../src/components/Content';
import PlayerResults from '../../src/containers/PlayerResults';
import PlayerFilters from '../../src/containers/PlayerFilters';


describe('<Content />', () => {
  describe('render()', () => {
    it('should render without throwing an error', () => {
      const wrapper = shallow(<Content />);
      expect(wrapper.find('.main-container').exists()).toBe(true)
    })

    it('renders filters component', () => {
      const wrapper = shallow(<Content />);
      expect(wrapper.contains(<PlayerFilters />)).toBe(true);

    })

    it('renders results components', () => {
      const wrapper = shallow(<Content />);
      expect(wrapper.contains(<PlayerResults />)).toBe(true);
    })

  });
});

