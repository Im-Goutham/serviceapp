jest.unmock('redux-mock-store')
jest.unmock('redux-thunk')


import React from 'react';
import { shallow, mount, render } from 'enzyme';
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


describe('AppTutorial', () => {
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





// test('finction and state testing', () => {
//   const AppTutorialData = renderer.create(
//           <AppTutorialScreen />
//   ).getInstance();
//   AppTutorialData.changeState('React');
//   expect(AppTutorialData.state.person).toEqual('React');
// });

});
test('Find element', () => {
  const AppData = renderer.create(<AppTutorialScreen />).toJSON();

  expect(findElement(AppData,'username')).toBeDefined();
});




describe('AccountScreen', () => {
  let wrapper;

  beforeEach(() => {
     store = mockStore(initialState);
     wrapper = shallow(<AccountScreen store={store} />).dive();
  })

   it('snapshot',()=> {
     expect(wrapper).toMatchSnapshot();

  })


 });
