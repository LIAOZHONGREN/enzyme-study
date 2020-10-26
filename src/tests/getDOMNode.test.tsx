import React from 'react'
import { mount } from 'enzyme'
import { expect } from 'chai'
import MyComponent from '../components/myComponent'

describe('getDOMNode', () => {

    it('getDOMNode_mount', () => {
        const w = mount((
            <div className='a' flag={'a'}>
                <MyComponent />
                <div></div>
            </div>
        ))
        //getDOMNode:获取包装器最外层node
        expect(w.getDOMNode().className).to.equal('a')
        expect(w.getDOMNode()).to.have.property('className')
        expect(w.getDOMNode().attributes.getNamedItem('flag')?.value).to.equal('a')
        expect(w.find(MyComponent).getDOMNode().className).to.equal('mycomponent')
    })

})