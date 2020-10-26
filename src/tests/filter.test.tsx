import React from 'react'
import { mount } from 'enzyme'
import { expect } from 'chai'
import MyComponent from '../components/myComponent'

describe('filter', () => {

    it('filter_mount', () => {
        const w = mount((
            <div>
                <div className='foo a'></div>
                <div className='foo b'></div>
                <MyComponent items={['0', '1', '2']} />
                <MyComponent  className='c' items={['a', 'b', 'c']} />
            </div>
        ))

        //filter:在多个相同类型的包装器中过滤出指定的包装器
        expect(w.find('.foo').filter('.a')).to.have.lengthOf(1)//过滤掉.b
        expect(w.find(MyComponent).filter({ items: ['a', 'b', 'c'] })).to.have.lengthOf(1)//过滤掉<MyComponent items={['0', '1', '2']} />
    })

})