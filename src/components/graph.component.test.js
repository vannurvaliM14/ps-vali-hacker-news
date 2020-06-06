import React from 'react';

import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

import Graph from './graph.component'

configure({adapter:new Adapter()})

describe("Graph Component Renders Correctly. Snapshot test",()=>{
   
    it("Should Recive Data in Props",()=>{         
        const wrapper = shallow(<Graph/>)        
        expect(wrapper).toMatchSnapshot();
    })
})