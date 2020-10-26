import React from 'react'
import { mount } from 'enzyme'
import { expect } from 'chai'
import MyComponent from '../components/myComponent'

describe('hostNodes', () => {

    it('hostNodes_mount', () => {
        const w = mount((
            <div className='root'>
                <MyComponent className='a' />
                <div className='a'></div>
            </div>
        ))

        //hostNodes:剔除自定义组件节点,返回原始节点的包装器
        const nodes = w.find('.a')
        expect(nodes).to.have.lengthOf(2)
        expect(nodes.hostNodes()).to.have.lengthOf(1)
        expect(nodes.hostNodes().type()).to.equal('div')
    })

})