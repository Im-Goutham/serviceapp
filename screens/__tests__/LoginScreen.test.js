jest.unmock('redux-mock-store')
jest.unmock('redux-thunk')

import React from 'react';
import { shallow, mount, render } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import renderer from 'react-test-renderer';
// import { expect } from 'chai';
import LoginScreen from '../LoginScreen';
import {initialState} from '../../config/jest/mockStore';

let store;
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('LoginScreen', () => {
  
    let component;
    const mockFunc = jest.fn();
    const navigation = {
        navigate: mockFunc,
        goBack: mockFunc
    }
    beforeEach(() => { 
          store = mockStore(initialState);
           component = shallow(<LoginScreen store={store} onPress={mockFunc} navigation={navigation} />).dive()
    })

    describe('Snapshot testing',()=>{
        it('should have same snapshot',()=> {
            expect(component).toMatchSnapshot();
        })
     })

     describe('Function testing',()=>{
    
     })



    describe('Form field testing',()=>{
     
            it('should change value for username input ',()=>{
                    component.find({testID:'username'}).getElement().props.onChangeText('username entered')
                    var value = component.find({testID:'username'}).getElement().props.value;
                    console.log(value);
                    expect(value).toEqual('username entered');
            })


            it('should change value for password input ',()=>{
                component.find({testID:'password'}).getElement().props.onChangeText('password entered')
                var value = component.find({testID:'password'}).getElement().props.value;
                console.log(value);
                expect(value).toEqual('password entered');
             })


                
            it('should press signin button ',()=>{
                    component.find({testID:'signInButton'}).simulate('press');
                    expect(mockFunc).toHaveBeenCalled();
            })
            it('should press forget button ',()=>{
                component.find({testID:'forgetButton'}).simulate('press');
                console.log('username input  ...  ',);
                expect(mockFunc).toHaveBeenCalled();
            })
    })

    describe('State testing',()=>{
    

    })


   describe('Props testing',()=>{
 
   })




});
