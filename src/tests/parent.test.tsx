import React from 'react'
import { mount } from 'enzyme'
import { expect } from 'chai'
import Foo from '../components/foo'

it('parent_mount', () => {

    const w = mount((
        <div className='root'>
            <Foo />
            <div id='a'></div>
        </div>
    ))

    //parent:获取调用parent的单节点的父包装器
    expect(w.find(Foo).parent().hasClass('root')).to.equal(true)
    expect(w.find('#a').parent().hasClass('root')).to.equal(true)
    
})