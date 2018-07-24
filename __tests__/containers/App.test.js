import React              from 'react';
import { shallow }        from 'enzyme';
import { store }          from '../../__mocks__/store-mock'

import App                from '../../src/containers/App';

describe('<App />', () => {
  describe('render()', () => {
    it('should render without throwing an error', () => {
      const wrapper = shallow(<App store={store}/>);
      expect(wrapper.find('App').exists()).toBe(true);
    })
  });

});
