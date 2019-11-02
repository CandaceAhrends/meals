import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import renderer from 'react-test-renderer';
import LoginForm from './LoginForm';
import {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
configure({ adapter: new Adapter() });

const router = {
    history: new BrowserRouter().history,
    route: {
      location: {},
      match: {},
    },
  };
test('L ', () => {
    expect(30).toEqual(30);
   
    const clickFn = jest.fn(); 
 
    const dd = mount(  <BrowserRouter >
    <LoginForm submitHandler={clickFn}></LoginForm></BrowserRouter >);

    dd.find('input').forEach( node=>{
        node.simulate('change', {target: {name: 'user', value: 'can'} } )
        node.simulate('change', {target: {name: 'pwd', value: 'can'} } )
    });
    
   
    dd.find('button').simulate('click');


    
    expect(clickFn).toHaveBeenCalled();
    expect(clickFn).toBeCalledWith({  user:'can', pwd: "can"}  );

});
