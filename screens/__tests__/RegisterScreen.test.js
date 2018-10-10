jest.unmock('redux-mock-store')
jest.unmock('redux-thunk')

import React from 'react';
import { shallow, mount, render } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import renderer from 'react-test-renderer';
// import { expect } from 'chai';
import RegisterScreen from '../RegisterScreen';
import {initialState} from '../../config/jest/mockStore';

let store;
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('RegisterScreen', () => {

    let component;
    const mockFunc = jest.fn();
    const navigation = {
        navigate: mockFunc,
        goBack: mockFunc
    }
    beforeEach(() => { 
          store = mockStore(initialState);
           component = shallow(<RegisterScreen store={store} onPress={mockFunc} navigation={navigation} />);
    })

    describe('Snapshot testing',()=>{
        it('should have same snapshot',()=> {
            expect(component).toMatchSnapshot();
        })
     })

     describe('Function testing',()=>{
    
     })


    describe('Form field testing', ()=>{
        
            it('should change value for email input ',()=>{
                console.log('register before -->  ',component.find({testID:'email'}).getElement().props.value);
                   component.find({testID:'email'}).getElement().props.onChangeText('email entered');
                   console.log('register after -->  ',component.find({testID:'email'}).getElement().props.value);
                    var value = component.find({testID:'email'}).getElement().props.value;
                    console.log(value);
                    expect(value).toEqual('email entered');
                
            })

            it('should change value for userId input ',()=>{
                component.find({testID:'userId'}).getElement().props.onChangeText('userId entered')
                var value = component.find({testID:'userId'}).getElement().props.value;
                console.log(value);
                expect(value).toEqual('userId entered');
             })

            

            it('should change value for password input ',()=>{
                component.find({testID:'password'}).getElement().props.onChangeText('password entered')
                var value = component.find({testID:'password'}).getElement().props.value;
                console.log(value);
                expect(value).toEqual('password entered');
             })


                
            it('should press signin button ',()=>{
                    component.find({testID:'signUpButton'}).simulate('press');
                    expect(mockFunc).toHaveBeenCalled();
            })
   
   })

    describe('State testing',()=>{
    

    })


   describe('Props testing',()=>{
 
   })




});
