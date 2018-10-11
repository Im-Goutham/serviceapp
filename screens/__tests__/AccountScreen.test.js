jest.unmock('redux-mock-store')
jest.unmock('redux-thunk')
import React from 'react';
import {TouchableOpacity} from 'react-native';
import { shallow, mount, render } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import renderer from 'react-test-renderer';
import AccountScreen from '../AccountScreen';
import {initialState} from '../../config/jest/mockStore';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
let store ;


describe('AccountScreen', () => {
    let wrapper;
    beforeEach(() => {
        store = mockStore(initialState);
        wrapper = shallow(<AccountScreen store={store}/>).dive();
    })
    it('snapshot',()=> {
        // console.warn(wrapper.state());
        expect(wrapper).toMatchSnapshot();
    })
    it('function and state testing', () => {
        const AccountScreenData = shallow(<AccountScreen store={store}/>).dive();
        const xyz = AccountScreenData.instance().hellome("hbjkh");
        console.warn(xyz);

        expect(wrapper).toMatchSnapshot();
    });

    /// For state testing  ---- > component.instance().state
    /// For finding button and simulating component.dive().find({ testID: 'signUp' }).first().simulate('press');

    it('Click events tesing ', () => {
        const mockFunc = jest.fn();
        const navigation = {
            navigate: mockFunc,
            goBack: mockFunc
        }
        const component = shallow(<AccountScreen onPress={mockFunc} navigation={navigation} store={store} />).dive();
        console.log( component.find({testID:'submit'}))
         component.find({testID:'submit'}).simulate('press');

        // const component = shallow(<AccountScreen onPress={mockFunc} navigation={navigation} store={store} backButton={true}/>);
        // console.log( component.dive().find({testID:'menu'}).length)
        // component.dive().find({testID:'menu'}).simulate('press');
        expect(mockFunc).toHaveBeenCalled();
    });
});
