import React from 'react'
import { mount } from 'enzyme'
import { expect } from 'chai'
import Foo from '../components/foo'

it('parent_mount', () => {

    const w = mount((
        <div className='root'>
            <div id='a'>
                <div>
                    <div></div>
                    <Foo />
                </div>
            </div>
        </div>
    ))

    //parents:获取调用parents的单节点的所有父/祖包装器
    expect(w.find(Foo).parents()).to.have.lengthOf(3)
    expect(w.find(Foo).parents({ id: 'a' })).to.have.lengthOf(1)
    expect(w.find(Foo).parents('.root')).to.have.lengthOf(1)
})