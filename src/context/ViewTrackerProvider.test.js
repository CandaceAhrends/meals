import React from 'react';
import ReactDOM from 'react-dom';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
import Enzyme, { mount } from 'enzyme';

import { ViewTrackerConsumer,ViewTrackerProvider } from "./ViewTrackerProvider";

it('tracks recipe clicks', () => {
 
  const trackerInstance = mount(<ViewTrackerProvider />).instance();
 
  trackerInstance.setViewed({ id: 123}) 
 
  expect(trackerInstance.getTotalViews(123)).toEqual(1);
  expect(trackerInstance.getViewsSum()).toEqual(1);
    
});
