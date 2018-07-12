import React from 'react';
import { shallow } from 'enzyme';

import PlayerRow from '../../src/components/PlayerRow';
import { Table } from 'semantic-ui-react'

describe('<PlayerRow />', () => {
  describe('render()', () => {
    const player = {
      name: 'Name',
      position: 'Position',
      nationality: 'Nationality',
      age: 'Age'
    };

    it('should render without throwing an error', () => {
      const wrapper = shallow(<PlayerRow player={player} />);
      expect(wrapper.find('TableRow').exists()).toBe(true);
    })

    it('renders all table row columns based on props', () => {
      const wrapper = shallow(<PlayerRow player={player} />);
      expect(wrapper.find('TableCell').length).toBe(Object.keys(player).length);
    })

  });
});

