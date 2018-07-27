import React              from 'react';
import { Provider }       from 'react-redux';
import { shallow, mount } from 'enzyme';
import { store }          from '../../__mocks__/store-mock'
import { players }        from '../../__mocks__/players-mock'
import { superagentMock } from '../../__mocks__/superagent-mock'
import sinon              from 'sinon'

import App                from '../../src/containers/App';

describe('<App />', () => {
  describe('render()', () => {
    it('should render without throwing an error', () => {
      const wrapper = shallow(<App store={store}/>);
      expect(wrapper.find('App').exists()).toBe(true);
    })

    it('calls componentDidMount', () => {
      //sinon.spy(App.prototype, 'componentDidMount');
      //const wrapper = mount(<Provider store={store}><App players={{footballPlayers: players}}/></Provider>);

      //expect(App.prototype.componentDidMount.calledOnce).to.equal(true);
    })
  });

});