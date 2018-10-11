jest.unmock('redux-mock-store')
jest.unmock('redux-thunk')

import React from 'react';
import { shallow, mount, render } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import renderer from 'react-test-renderer';
// import { expect } from 'chai';
import ForgotScreen from '../ForgotScreen';
import { initialState } from '../../config/jest/mockStore';

let store;
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('ForgotScreen', () => {

    let component;
    const mockFunc = jest.fn();
    const navigation = {
        navigate: mockFunc,
        goBack: mockFunc
    }
    beforeEach(() => {
        store = mockStore(initialState);
        component = shallow(<ForgotScreen store={store} onPress={mockFunc} navigation={navigation} />)
    })

    describe('Snapshot testing', () => {
        it('should have same snapshot', () => {
            expect(component).toMatchSnapshot();
        })
    })
    describe('Function testing', () => {

    })
    describe('Form field testing', () => {

        it('should change value for username input ', () => {
            component.find({ testID: 'email' }).getElement().props.onChangeText('Email entered')
            var value = component.find({ testID: 'email' }).getElement().props.value;
            console.log(value);
            expect(value).toEqual('Email entered');
        })
        it('should press forget button ', () => {
            component.find({ testID: 'forgetButton' }).simulate('press');
            expect(mockFunc).toHaveBeenCalled();
        })
    })

    describe('State testing', () => {
    })
    describe('Props testing', () => {
    })
});
