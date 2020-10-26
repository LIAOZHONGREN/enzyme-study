import React from 'react'
import { mount } from 'enzyme'
import { expect } from 'chai'
import Foo from '../components/foo'

it('not_mount', () => {

    const w = mount((
        <div>
            <Foo />
            <Foo className='not' />
            <div id='a'></div>
            <div id='a not'></div>
            <div id='a'></div>
        </div>
    ))

    //not:剔除not选择器选中的节点
    expect(w.find(Foo).not('.not')).to.have.lengthOf(1)
    expect(w.find('#a').not('#not')).to.have.lengthOf(2)

})