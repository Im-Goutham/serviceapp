jest.unmock('redux-mock-store')
jest.unmock('redux-thunk')
// jest.mock('react-native-google-signin', () => {
//       return {};
//     });
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import renderer from 'react-test-renderer';
import MyJobDetailScreen from '../MyJobDetailScreen';
import {initialState} from '../../config/jest/mockStore';

let store;
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('MyJobDetailScreen', () => {
    let wrapper;
    beforeEach(() => {
        store = mockStore(initialState);
        wrapper = shallow(
            <MyJobDetailScreen
                store={store}
                navigation={{state: {params: {mainScreen:''}}}}
                />).dive();
    //    wrapper.setProps({navigation:});
    })
    it('snapshot',()=> {
        expect(wrapper).toMatchSnapshot();
    })
});
