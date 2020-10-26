import React from 'react'
import { mount } from 'enzyme'
import { expect } from 'chai'
import MyComponent from '../components/myComponent'

describe('last', () => {

    it('last_mount', () => {
        const w = mount((
            <div className='root'>
                <MyComponent items={['0', '1', '2']} />
                <MyComponent items={['a', 'b', 'c']} />
            </div>
        ))
        //last:返回选择器中选中的多个单节点的最后一个节点的包装器
        expect(w.find(MyComponent).last().props().items[0]).to.equal('a')

    })

})