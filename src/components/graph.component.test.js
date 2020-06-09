import React from 'react';

import { shallow} from 'enzyme';



import Graph from './graph.component'



describe("Graph Component Renders Correctly. Snapshot test",()=>{
   
    it("Should Recive Data in Props",()=>{         
        const wrapper = shallow(<Graph/>)        
        expect(wrapper).toMatchSnapshot();
    })
})