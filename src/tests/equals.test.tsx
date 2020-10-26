import React from 'react'
import { mount } from 'enzyme'
import { expect } from 'chai'
import MyComponent from '../components/myComponent'

describe('equals', () => {

    //感觉没什么用
    it('equals.mount', () => {
        const w = mount((<div className="foo bar" ></div>))
        const w2 = mount((<div className="foo bar" ><MyComponent /></div>))
        expect(w.equals(<div className="foo bar"></div>)).to.equal(true)
        // expect(w2.equals(<div className="foo bar"></div>)).to.equal(true)//不通过
        expect(w2.equals(<div className="foo bar" ><MyComponent /></div>)).to.equal(true)
    })

})