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
let store = mockStore(initialState);



describe('AccountScreen', () => {
    let component;
    const mockFunc = jest.fn();
    const navigation = {
        navigate: mockFunc,
        goBack: mockFunc
    }
    beforeEach(() => { 
    component = shallow(<AccountScreen store={store} onPress={mockFunc} navigation={navigation} />).dive();
    })


    // describe('Component rendering',()=>{
    //     it('should render the register screen without crashing',()=>{
    //                 const rendered = renderer.create(<AccountScreen store={store}/>).toJSON();
    //                 expect(rendered).toBeTruthy();
    //      })
    // })

    describe('Snapshot testing',()=>{
        it('should have same snapshot',()=> {
            expect(component).toMatchSnapshot();
        })
     })

     describe('Function testing',()=>{
    
     })


      describe('Form field testing',()=>{
           
            it('should change value for firstname input ',()=>{
                    component.find({testID:'firstname'}).getElement().props.onChangeText('firstname entered')
                    var value = component.find({testID:'firstname'}).getElement().props.value;
                    console.log(value);
                    expect(value).toEqual('firstname entered');
            })


            it('should change value for lastname input ',()=>{
                component.find({testID:'lastname'}).getElement().props.onChangeText('lastname entered')
                var value = component.find({testID:'lastname'}).getElement().props.value;
                console.log(value);
                expect(value).toEqual('lastname entered');
            })


            it('should change value for address input ',()=>{
                component.find({testID:'address'}).getElement().props.onChangeText('address entered')
                var value = component.find({testID:'address'}).getElement().props.value;
                console.log(value);
                expect(value).toEqual('address entered');
            })

            it('should change value for dob input ',()=>{
                component.find({testID:'dob'}).getElement().props.onChangeText('dob entered')
                var value = component.find({testID:'dob'}).getElement().props.value;
                console.log(value);
                expect(value).toEqual('dob entered');
            })

            it('should change value for state input ',()=>{
                component.find({testID:'state'}).getElement().props.onChangeText('state entered')
                var value = component.find({testID:'state'}).getElement().props.value;
                console.log(value);
                expect(value).toEqual('state entered');
            })

            it('should change value for country input ',()=>{
                component.find({testID:'country'}).getElement().props.onChangeText('country entered')
                var value = component.find({testID:'country'}).getElement().props.value;
                console.log(value);
                expect(value).toEqual('country entered');
            })

            it('should change value for city input ',()=>{
                component.find({testID:'city'}).getElement().props.onChangeText('city entered')
                var value = component.find({testID:'city'}).getElement().props.value;
                console.log(value);
                expect(value).toEqual('city entered');
            })

            it('should change value for zip input ',()=>{
                component.find({testID:'zip'}).getElement().props.onChangeText('zip entered')
                var value = component.find({testID:'zip'}).getElement().props.value;
                console.log(value);
                expect(value).toEqual('zip entered');
            })

            it('should change value for about input ',()=>{
                component.find({testID:'about'}).getElement().props.onChangeText('about entered')
                var value = component.find({testID:'about'}).getElement().props.value;
                console.log(value);
                expect(value).toEqual('about entered');
            })

                
            it('should press signin button ',()=>{
                    component.find({testID:'updateButton'}).simulate('press');
                    expect(mockFunc).toHaveBeenCalled();
            })
        })
});
