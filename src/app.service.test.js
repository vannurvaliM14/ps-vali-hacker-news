import React from 'react'
import axios from 'axios'

import Service from './app.service'

class LocalStorageMock {
    constructor() {
      this.store = {}
    }
  
    clear() {
      this.store = {}
    }  
    getItem(key) {
      return this.store[key] || null
    }  
    setItem(key, value) {
      this.store[key] = value
    }  
    removeItem(key) {
      delete this.store[key]
    }
}  
global.localStorage = new LocalStorageMock

describe("Service",()=>{
    let callbackMock ;
   
    beforeEach(()=>{
        callbackMock = jest.fn()
    }) 
    afterEach(()=>{
        localStorage.clear()
    }) 
    
    it('upvote - local Storage - set Item',()=>{        
        Service.upvote('1234',5,callbackMock)
        expect(JSON.parse(localStorage.getItem('1234')).upvote).toBe(6)
        
    })
    it('upvote - callback is being called?',()=>{
        Service.upvote('1234',5,callbackMock)
        expect(callbackMock.mock.calls.length).toBe(1)       
    })
    it('is Hidden should return false in case its hidden state not stored in localstorage',()=>{         
        expect(Service.isHidden('1122')).toBeFalsy()
    })
    it("hide function should store its state in localstorage",()=>{
        Service.hide('5566','title',callbackMock)
        expect(JSON.parse(localStorage.getItem('5566')).hidden).toBeTruthy()        
    })

   
})