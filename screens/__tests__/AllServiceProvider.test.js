jest.unmock('redux-mock-store')
jest.unmock('redux-thunk')
import React from 'react';
import {TouchableOpacity} from 'react-native';
import { shallow, mount, render } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import renderer from 'react-test-renderer';
import AllServiceProvider from '../AllServiceProvider';
import {initialState} from '../../config/jest/mockStore';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

let store = mockStore(initialState);


describe('AllServiceProvider', () => {
    let component;
    const mockFunc = jest.fn();
    const navigation = {
        navigate: mockFunc,
        goBack: mockFunc
    }
    beforeEach(() => { 
    component = shallow(<AllServiceProvider store={store} onPress={mockFunc} navigation={navigation} />).dive();
    })

    describe('Snapshot testing',()=>{
        it('should have same snapshot',()=> {
            expect(component).toMatchSnapshot();
        })
     })

     describe('Function testing',()=>{
    
     })


    //   describe('Form field testing',()=>{
           
    //         it('should press addServiceButton button ',()=>{
    //                 component.find({testID:'addServiceButton'}).simulate('press');
    //                 expect(mockFunc).toHaveBeenCalled();
    //         })
    //     })
});
