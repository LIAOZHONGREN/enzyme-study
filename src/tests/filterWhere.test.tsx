import React from 'react'
import { mount } from 'enzyme'
import { expect } from 'chai'
import MyComponent from '../components/myComponent'

describe('filterWhere', () => {

    it('filterWhere_mount', () => {
        const w = mount((
            <div>
                <div className='foo a'></div>
                <div className='foo b'></div>
                <MyComponent items={['0', '1', '2']} />
                <MyComponent className='c' items={['a', 'b', 'c']} />
            </div>
        ))
        //filterWhere:在多个相同类型的包装器中通过给定的过滤函数过滤出指定的包装器
        expect(w.find(MyComponent).filterWhere((n) => n.hasClass('c') || n.props().items[0] === '0')).to.have.lengthOf(2);
    })

})