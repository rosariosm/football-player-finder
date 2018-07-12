import React from 'react';
import { shallow } from 'enzyme';

import MainHeader from '../../src/components/MainHeader';

describe('<MainHeader />', () => {
  describe('render()', () => {
    it('should render without throwing an error', () => {
      const wrapper = shallow(<MainHeader />);
      expect(wrapper.find('.main-header').exists()).toBe(true);
    })

    it('renders football icon', () => {
      const wrapper = shallow(<MainHeader />);
      expect(wrapper.find('Icon').exists()).toBe(true);
      expect(wrapper.find('Icon').prop('name')).toEqual('futbol outline');
    })
  });
});

