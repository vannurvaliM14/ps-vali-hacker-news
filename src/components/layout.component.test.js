import React from 'react'
import {shallow} from 'enzyme'

import Layout from './layout.component'

describe("Layout component test",()=>{
    const props = {};
    beforeEach(()=>{
        props.location = {search:''}
    })
    it('snapshot test',()=>{
        let wrapper = shallow(<Layout {...props}/>)
        expect(wrapper).toMatchSnapshot()
    })
})