import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import {MediaPage} from './MediaPage';
import FlickrGallery from '../components/FlickrGallery';

describe('<MediaPage />', () => {
  it('should contain <FlickrGallery />', () => {
    const wrapper = shallow(<MediaPage />);

    expect(wrapper.find(FlickrGallery)).to.be.length(1);
  });
});
