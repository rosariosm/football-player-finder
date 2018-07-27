import React              from 'react';
import { shallow, mount }        from 'enzyme';
import sinon from 'sinon'
import { Form } from 'semantic-ui-react'

import { store }          from '../../__mocks__/store-mock'
import PlayerFilters      from '../../src/containers/PlayerFilters';


describe('<PlayerFilters />', () => {
  describe('render()', () => {
    it('should render without throwing an error', () => {
      const wrapper = shallow(<PlayerFilters store={store}/>);
      
      expect(wrapper.find('PlayerFilters').exists()).toBe(true);
    })

    it('should render a form, three inputs and two buttons', () => {
      const wrapper = mount(<PlayerFilters store={store}/>);      

      expect(wrapper.find('Form').exists()).toBe(true);
      expect(wrapper.find('Input')).toHaveLength(1);
      expect(wrapper.find('Select')).toHaveLength(1);
      expect(wrapper.find('NumericInput')).toHaveLength(1);
      expect(wrapper.find('Button')).toHaveLength(2);
    })

    it('should render a form with a onSubmit() prop', () => {
      const spy = sinon.spy();	
      const wrapper = mount(<PlayerFilters store={store} handleSubmit={spy}/>);
      
      wrapper.find('Form').simulate('submit')      
      expect(spy.calledOnce).toBe(true)
      spy.restore()
    })
  });

});


