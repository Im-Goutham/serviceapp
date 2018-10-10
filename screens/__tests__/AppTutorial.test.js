jest.unmock('redux-mock-store')
jest.unmock('redux-thunk')
import React from 'react';
import  {TouchableOpacity} from 'react-native';
import { shallow, mount, render } from 'enzyme';
import renderer from 'react-test-renderer';
import AppTutorialScreen from '../AppTutorialScreen';




describe('AppTutorial Screen', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<AppTutorialScreen />);
    })
    it('snapshot',()=> {
        expect(wrapper).toMatchSnapshot();
    })
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
        const mockFunc = jest.fn();
        const navigation = {
            navigate: mockFunc,
            goBack: mockFunc
        }
        const component = shallow(<AppTutorialScreen onPress={mockFunc} navigation={navigation} />);
        console.log( component.dive().find({testID:'usernameTest'}).length)
        component.dive().find({testID:'usernameTest'}).simulate('press');
        expect(mockFunc).toHaveBeenCalled();
    });




});

