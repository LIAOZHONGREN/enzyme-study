import React from 'react'
import { mount } from 'enzyme'
import { expect } from 'chai'

it('length_mount', () => {

    const w = mount((
        <div>
            <div id='a'></div>
            <div id='a'></div>
            <div id='a'></div>
        </div>
    ))

    //length:记录选择器选中的单节点的个数
    expect(w.find('#a').length).to.equal(3)

})