import React from 'react'
import {shallow} from 'enzyme'

import Story from './story.component'

describe('Story Component',()=>{
    
    it("Snapshot Test",()=>{ 
        const wrapper = shallow(<Story/>)       
        expect(wrapper).toMatchSnapshot()
    })
    it('upvote button exists',()=>{
        const wrapper = shallow(<Story/>) 
        expect(wrapper.find('.upvote-button')).toHaveLength(1)
    })
    it('upvote button click',()=>{
        const buttonClickMock = jest.fn()
        
        const wrapper = shallow(<Story castVote={buttonClickMock} />)

        wrapper.find('.upvote-button').simulate('click')
        expect(buttonClickMock.mock.calls.length).toBe(1)
        
        
    })
    
    it('Hide Link exists',()=>{
        const wrapper = shallow(<Story/>)
        expect(wrapper.find('.hide-button')).toHaveLength(1)
    })
    it('hide button click',()=>{
        const hideButtonClickMock  = jest.fn()
        const wrapper = shallow(<Story  hide={hideButtonClickMock}/>)
        wrapper.find('.hide-button').simulate('click')
        expect(hideButtonClickMock.mock.calls.length).toBe(1)
        
    })
        
    
})

describe('Testing Timestamp conversion',()=>{
    
    it('seconds',()=>{
        const created_at_i = (Date.now())/1000;
        const wrapper = shallow(<Story created_at_i={created_at_i}/>)        
        expect(wrapper.find('.dim').at(2).text()).toMatch(/Second/)
    })
    it('Minutes',()=>{
        const created_at_i = (Date.now()/1000)-(5*60);
        const wrapper = shallow(<Story created_at_i={created_at_i}/>)        
        expect(wrapper.find('.dim').at(2).text()).toMatch(/Minute/)
    })
    it('Hours',()=>{
        const created_at_i = (Date.now()/1000)-(5*60*60);
        const wrapper = shallow(<Story created_at_i={created_at_i}/>)        
        expect(wrapper.find('.dim').at(2).text()).toMatch(/Hour/)
    })
    it('Days',()=>{
        const created_at_i = (Date.now()/1000)-(5*24*60*60);
        const wrapper = shallow(<Story created_at_i={created_at_i}/>)        
        expect(wrapper.find('.dim').at(2).text()).toMatch(/Day/)
    })
    it('Weeks',()=>{
        const created_at_i = (Date.now()/1000)-(2*7*24*60*60);
        const wrapper = shallow(<Story created_at_i={created_at_i}/>)        
        expect(wrapper.find('.dim').at(2).text()).toMatch(/Week/)
    })
    it('Months',()=>{
        const created_at_i = (Date.now()/1000)-(5*30*24*60*60);
        const wrapper = shallow(<Story created_at_i={created_at_i}/>)        
        expect(wrapper.find('.dim').at(2).text()).toMatch(/Month/)
    })
    it('Years',()=>{
        const created_at_i = (Date.now()/1000)-(5*365*24*60*60);
        const wrapper = shallow(<Story created_at_i={created_at_i}/>)        
        expect(wrapper.find('.dim').at(2).text()).toMatch(/Year/)
    })

})