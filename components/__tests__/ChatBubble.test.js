jest.unmock('redux-mock-store')
jest.unmock('redux-thunk')
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import renderer from 'react-test-renderer';
import ChatBubble from '../ChatBubble';
import {initialState} from '../../config/jest/mockStore';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

let store = mockStore(initialState);


describe('ChatBubble', () => {
    let component;
    const mockFunc = jest.fn();
    const navigation = {
        navigate: mockFunc,
        goBack: mockFunc
    }
    
    const currentMessage = {
         user: {name : ''}
     };

     const user = {
          id:''
     }

    beforeEach(() => { 
    component = shallow(<ChatBubble store={store} onPress={mockFunc} navigation={navigation} currentMessage={currentMessage} user={user}/>).dive();
    })

    describe('Snapshot testing',()=>{
        it('should have same snapshot',()=> {
            expect(component).toMatchSnapshot();
        })
     })

     describe('Function testing',()=>{
    
     })


    //   describe('Form field testing',()=>{
           
    //         it('should press signUp button ',()=>{
    //                 component.find({testID:'signUpButton'}).simulate('press');
    //                 expect(mockFunc).toHaveBeenCalled();
    //         })
    //     })
});
