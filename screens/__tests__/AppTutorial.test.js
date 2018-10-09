jest.unmock('redux-mock-store')
jest.unmock('redux-thunk')
import React from 'react';
<<<<<<< HEAD
import {TouchableOpacity} from 'react-native';
=======
import  {TouchableOpacity} from 'react-native';
>>>>>>> 9294cf32c4e24883ee485bf812b5bf417caa76e4
import { shallow, mount, render } from 'enzyme';
import renderer from 'react-test-renderer';
import AppTutorialScreen from '../AppTutorialScreen';
<<<<<<< HEAD
import {initialState} from '../../config/jest/mockStore';

let store;
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


describe('AppTutorial', () => {
=======




describe('AppTutorial Screen', () => {
>>>>>>> 9294cf32c4e24883ee485bf812b5bf417caa76e4
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<AppTutorialScreen />);
    })
    it('snapshot',()=> {
        expect(wrapper).toMatchSnapshot();
    })
<<<<<<< HEAD
    it('function and state testing', () => {
        const AppTutorialData = renderer.create(<AppTutorialScreen />).getInstance();
        AppTutorialData.changeState('React');
        expect(AppTutorialData.state.person).toEqual('React');
    });

    /// For state testing  ---- > component.instance().state
    /// For finding button and simulating component.dive().find({ testID: 'signUp' }).first().simulate('press');

    it('Click events tesing ', () => {
=======
    it('function and state', () => {
    const AppTutorialData = renderer.create(
            <AppTutorialScreen />
    ).getInstance();
    AppTutorialData.changeState('React');
    expect(AppTutorialData.state.person).toEqual('React');
    });


    /// For state testing  ---- > component.instance().state
    /// For finding button and simulating component.dive().find({ testID: 'signUp' }).first().simulate('press');

    it('events calling should work ', () => {
>>>>>>> 9294cf32c4e24883ee485bf812b5bf417caa76e4
        const mockFunc = jest.fn();
        const navigation = {
            navigate: mockFunc,
            goBack: mockFunc
        }
<<<<<<< HEAD
        const component = shallow(<AppTutorialScreen onPress={mockFunc} navigation={navigation} />);
        console.log(component.instance().state)
        component.dive().find(TouchableOpacity).first().simulate('press');
        expect(mockFunc).toHaveBeenCalled();
    });
});
=======
        const component = shallow(<AppTutorialScreen onPress={mockFunc} navigation={navigation} />);   
        console.log( component.dive().find({testID:'usernameTest'}).length) 
        component.dive().find({testID:'usernameTest'}).simulate('press');
        expect(mockFunc).toHaveBeenCalled();
    });


    

});

>>>>>>> 9294cf32c4e24883ee485bf812b5bf417caa76e4
