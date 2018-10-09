jest.unmock('redux-mock-store')
jest.unmock('redux-thunk')

import React, {Component} from 'react';
import { View, Text, StyleSheet, ListView } from 'react-native';
import { shallow } from 'enzyme';
// import { expect } from 'chai';
import configureMockStore from 'redux-mock-store';
import AllServiceList from '../AllServiceList';
import {initialState} from '../../config/jest/mockStore';

import thunk from 'redux-thunk';
let store;
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

function sum(a, b) {
  return a + b;
}


describe('<AllServiceList />', () => {
    let wrapper;
    beforeEach(() => {
        store = mockStore(initialState);
        wrapper = shallow(<AllServiceList store={store}/>).dive();
    })

    it('it should render 1 view component', () => {
        expect(wrapper.find(ListView)).toBeDefined();
  });
});



it('should return the sum of two numbers (4 + 5 = 9)', () => {
  expect(sum(4, 5)).toMatchSnapshot();
});
exports[`should get the sum of two numbers (4 + 5 = 9) 1`] = `9`;

// describe('<AllServiceList />', () => {
//     let wrapper;
//     beforeEach(() => {
//         store = mockStore(initialState);
//         wrapper = shallow(<AllServiceList store={store}/>).dive();
//     })
//
//     it('it should render 1 view component', () => {
//         console.warn(wrapper.find(ListView))
//         expect(wrapper.find(ListView)).to.have.length(1);
//   });
// });
