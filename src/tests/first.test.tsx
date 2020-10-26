import React from 'react'
import { mount } from 'enzyme'
import { expect } from 'chai'
import MyComponent from '../components/myComponent'

describe('first', () => {

    it('first_mount', () => {
        const w = mount((
            <div className='root'>
                <MyComponent items={['0', '1', '2']} />
                <MyComponent items={['a', 'b', 'c']} />
            </div>
        ))
        //first:返回选择器中选中的多个单节点的第一个节点的包装器
        expect(w.find(MyComponent).first().props().items).to.eql(['0', '1', '2'])

    })

})