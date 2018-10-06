import React from 'react';
 import { shallow } from 'enzyme';
import { Provider } from "react-redux";
// import configureMockStore from "redux-mock-store";
import AppTutorialScreen from '../../screens/AppTutorialScreen';

// const mockStore = configureMockStore();
// const store = mockStore({});


import renderer from 'react-test-renderer';


let findElement = function(tree,element) {
   console.warn(tree.children);
   let result = undefined;
   for (node in tree.children){
     if(tree.children[node].props.testID == element){
         result = true;
     }
   }
   return result;
}





describe('AppTutorial', () => {
 let wrapper;

//  beforeEach(() => {
//     wrapper = shallow(<AppTutorialScreen />);
//  })

//   it('snapshot',()=> {
//     expect(wrapper).toMatchSnapshot();

//  })

 it('rendering',()=> {
        const tree = renderer.create(
                <AppTutorialScreen />
        ).toJSON();
        expect(tree).toMatchSnapshot()

  })





test('finction and state testing', () => {
  const AppTutorialData = renderer.create(
          <AppTutorialScreen />
  ).getInstance();
  AppTutorialData.changeState('React');
  expect(AppTutorialData.state.person).toEqual('React');
});

});
// test('Find element', () => {
//   const AppData = renderer.create(
//           <AppTutorialScreen />
//   ).toJSON();

//   expect(findElement(AppData,'username')).toBeDefined();
// });