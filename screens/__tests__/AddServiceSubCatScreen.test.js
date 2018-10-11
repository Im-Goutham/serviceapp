jest.unmock('redux-mock-store')
jest.unmock('redux-thunk')
import React from 'react';
import {TouchableOpacity} from 'react-native';
import { shallow, mount, render } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import renderer from 'react-test-renderer';
import AddServiceSubCatScreen from '../AddServiceSubCatScreen';
import {initialState} from '../../config/jest/mockStore';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

let store = mockStore(initialState);


describe('AddServiceSubCatScreen', () => {
    let component;
    const mockFunc = jest.fn();
    const navigation = {
        navigate: mockFunc,
        goBack: mockFunc,
        state: {
            params: {mainScreen :''}
        }
    }
    beforeEach(() => { 
    component = shallow(<AddServiceSubCatScreen store={store} onPress={mockFunc} navigation={navigation} />).dive();
    })

    describe('Snapshot testing',()=>{
        it('should have same snapshot',()=> {
            expect(component).toMatchSnapshot();
        })
     })

     describe('Function testing',()=>{
    
     })


      describe('Form field testing',()=>{
           
            it('should press addServiceButton button ',()=>{
                    component.find({testID:'addServiceButton'}).simulate('press');
                    expect(mockFunc).toHaveBeenCalled();
            })
        })
});
