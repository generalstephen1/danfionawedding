import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import {DetailsPage} from './DetailsPage';
import FuelSavingsForm from '../components/FuelSavingsForm';

describe('<DetailsPage />', () => {
  it('should contain <FuelSavingsForm />', () => {
    const actions = {
      saveFuelSavings: () => { },
      calculateFuelSavings: () => { }
    };
    const fuelSavings = {};
    const wrapper = shallow(<DetailsPage actions={actions} fuelSavings={fuelSavings}/>);

    expect(wrapper.find(FuelSavingsForm)).to.be.length(1);
  });
});
