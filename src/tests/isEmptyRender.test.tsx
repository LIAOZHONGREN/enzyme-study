import React from 'react'
import { mount } from 'enzyme'
import { expect } from 'chai'

function Foo() {
    return null
}

it('isEmptyRender_mount', () => {

    //isEmptyRender:判断是否是空渲染
    const wrapper = mount(<Foo />);
    expect(wrapper.isEmptyRender()).to.equal(true)

})