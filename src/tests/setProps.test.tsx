import React, { useState } from 'react'
import { mount } from 'enzyme'
import { expect } from 'chai'

function Temp(props: { value: any, func: () => any }) {
    const { value, func } = props

    return (
        <div onClick={() => func()}>{value}</div>
    )
}

it('setProps_mount', () => {

    //setProps:修改props,很有用
    const w = mount(<Temp value={1} func={() => 1} />)
    expect(w.childAt(0).text()).to.equal('1')
    expect(w.childAt(0).invoke('onClick')()).to.equal(1)
    w.setProps({ value: 2, func: () => 2 })
    expect(w.childAt(0).text()).to.equal('2')
    expect(w.childAt(0).invoke('onClick')()).to.equal(2)
})