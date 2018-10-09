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
import LoginScreen from '../LoginScreen';
import {initialState} from '../../config/jest/mockStore';

let store;
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('LoginScreen', () => {
    let wrapper;
    beforeEach(() => {
        store = mockStore(initialState);
        wrapper = shallow(
            <LoginScreen
                store={store}
                // navigation={{state: {params: {mainScreen:''}}}}
                />).dive();
    //    wrapper.setProps({navigation:});
    })
    it('snapshot',()=> {
        console.warn(wrapper);
        expect(wrapper).toMatchSnapshot();
    })
});
