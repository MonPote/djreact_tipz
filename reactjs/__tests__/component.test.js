import React from 'react';
import renderer from 'react-test-renderer';
import ProjectCompensation from '../components/ProjectCompensation';

describe('components', function() {
  describe('<ProjectCompensation />', function() {
    it('renders correctly', function() {
      const compensation = {
          title: 'First Title',
          amount: 13,
          description: 'Description of Project Compensation',
          id: 14
      }

      var tree = renderer.create(<ProjectCompensation compensation={compensation} />).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
