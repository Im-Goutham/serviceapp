jest.unmock('redux-mock-store')
jest.unmock('redux-thunk')
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import renderer from 'react-test-renderer';
import PostJobScreen from '../PostJobScreen';
import {initialState} from '../../config/jest/mockStore';

let store;
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('PostJobScreen', () => {
    let wrapper;
    beforeEach(() => {
        store = mockStore(initialState);
        wrapper = shallow(
            <PostJobScreen
                store={store}
                // navigation={{state: {params: {mainScreen:''}}}}
                />).dive();
    //    wrapper.setProps({navigation:});
    })
    it('snapshot',()=> {
        expect(wrapper).toMatchSnapshot();
    })
});
