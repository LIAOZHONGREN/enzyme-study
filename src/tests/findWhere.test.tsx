import React from 'react'
import { mount } from 'enzyme'
import { expect } from 'chai'
import MyComponent from '../components/myComponent'

describe('findWhere', () => {

    it('findWhere_mount', () => {
        const w = mount((
            <div className='root'>
                <div className='foo a'></div>
                <span className='foo b'></span>
                <MyComponent items={['0', '1', '2']} />
                <MyComponent className='c' items={['a', 'b', 'c']} />
            </div>
        ))

        //findWhere:通过提供了寻找函数寻找包装器
        expect(w.findWhere(n => n.type() == MyComponent)).to.have.lengthOf(2)
        expect(w.findWhere(n => (n.hasClass('foo') && n.type() === 'span') || (n.props().items ? n.props().items[0] === 'a' : false))).to.have.lengthOf(2)
    })

})