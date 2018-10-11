jest.unmock('redux-mock-store')
jest.unmock('redux-thunk')
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import renderer from 'react-test-renderer';
import NotificationsScreen from '../NotificationsScreen';
import {initialState} from '../../config/jest/mockStore';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

let store = mockStore(initialState);


describe('NotificationsScreen', () => {
    let component;
    const mockFunc = jest.fn();
    const navigation = {
        navigate: mockFunc,
        goBack: mockFunc,
        state: {
            params: {
                state:  {
                    backButton: true,
                    routeName: 'findJob'
                    }
            }      
       }
    }
    beforeEach(() => { 
    component = shallow(<NotificationsScreen store={store} onPress={mockFunc} navigation={navigation} />).dive();
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
