import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import {MediaPage} from './MediaPage';
import Gallery from '../components/Gallery';

describe('<MediaPage />', () => {
  it('should contain <Gallery />', () => {
    const wrapper = shallow(<MediaPage />);

    expect(wrapper.find(Gallery)).to.be.length(1);
  });
});
