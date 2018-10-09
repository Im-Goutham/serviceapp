jest.unmock('redux-mock-store')
jest.unmock('redux-thunk')
import React from 'react';
import {TouchableOpacity} from 'react-native';
import { shallow, mount, render } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import renderer from 'react-test-renderer';
import AppTutorialScreen from '../AppTutorialScreen';
import {initialState} from '../../config/jest/mockStore';

let store;
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


describe('AppTutorial', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<AppTutorialScreen />);
    })
    it('snapshot',()=> {
        expect(wrapper).toMatchSnapshot();
    })
    it('function and state testing', () => {
        const AppTutorialData = renderer.create(<AppTutorialScreen />).getInstance();
        AppTutorialData.changeState('React');
        expect(AppTutorialData.state.person).toEqual('React');
    });

    /// For state testing  ---- > component.instance().state
    /// For finding button and simulating component.dive().find({ testID: 'signUp' }).first().simulate('press');

    it('Click events tesing ', () => {
        const mockFunc = jest.fn();
        const navigation = {
            navigate: mockFunc,
            goBack: mockFunc
        }
        const component = shallow(<AppTutorialScreen onPress={mockFunc} navigation={navigation} />);
        console.log(component.instance().state)
        component.dive().find(TouchableOpacity).first().simulate('press');
        expect(mockFunc).toHaveBeenCalled();
    });
});
