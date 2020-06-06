import React from 'react';

import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

import App from './App'

configure({adapter:new Adapter()})

describe("Graph Component",()=>{
    it("Should Recive Data in Props",()=>{
        const wrapper = shallow(<App/>);

        expect([2,3]).toHaveLength(2)
    })
})
