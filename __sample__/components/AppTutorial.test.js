jest.unmock('redux-mock-store')
jest.unmock('redux-thunk')


import React from 'react';
import  {TouchableOpacity} from 'react-native';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import renderer from 'react-test-renderer';
import AppTutorialScreen from '../../screens/AppTutorialScreen';
import AccountScreen from '../../screens/AccountScreen';
import {initialState} from '../../config/jest/mockStore';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
let store;

let findElement = function(tree,element) {
   console.warn(tree);
   let result = undefined;
   for (let node in tree.children){
    // if(tree.children[node].props.testID == element){
         result = true;
//     }
   }
   return result;
}


describe('AppTutorial Screen', () => {
 let wrapper;

 beforeEach(() => {
    wrapper = shallow(<AppTutorialScreen />);
 })

  it('snapshot',()=> {
    expect(wrapper).toMatchSnapshot();

 })

//  it('rendering',()=> {
//         const tree = renderer.create(
//                 <AppTutorialScreen />
//         ).toJSON();
//         expect(tree).toMatchSnapshot()

//   })





test('finction and state testing', () => {
  const AppTutorialData = renderer.create(
          <AppTutorialScreen />
  ).getInstance();
  AppTutorialData.changeState('React');
  expect(AppTutorialData.state.person).toEqual('React');
});


/// For state testing  ---- > component.instance().state
/// For finding button and simulating component.dive().find({ testID: 'signUp' }).first().simulate('press');

test('Click events tesing ', () => {
  const mockFunc = jest.fn();
  const navigation = {
    navigate: mockFunc,
    goBack: mockFunc
  }
  const component = shallow(<AppTutorialScreen onPress={mockFunc} navigation={navigation} />);   
  console.log(component.instance().state) 
  component.dive().find({ testID: 'signUp' }).simulate('press');
  expect(mockFunc).toHaveBeenCalled();
});


});
test('Find element', () => {
  const AppData = renderer.create(<AppTutorialScreen />).toJSON();

  expect(findElement(AppData,'username')).toBeDefined();
});




// describe('AccountScreen', () => {
//   let wrapper;
 
//   beforeEach(() => {
//      store = mockStore(initialState);
//      wrapper = shallow(<AccountScreen store={store} />).dive();
//   })
 
//    it('snapshot',()=> {
//      expect(wrapper).toMatchSnapshot();
 
//   })
 
 
//  });
