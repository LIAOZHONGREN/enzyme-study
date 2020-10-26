import React, { useState } from 'react'
import { mount } from 'enzyme'
import { expect } from 'chai'

it('some_mount', () => {

    const w = mount((
        <div>
            <div className="foo qoo" />
            <div className="foo boo" />
            <div className="foo hoo" />
        </div>
    ))

    //类似数组的some函数
    expect(w.find('.foo').some('.qoo')).to.equal(true)
    expect(w.find('.foo').some('.foo')).to.equal(true)
    expect(w.find('.foo').some('.bar')).to.equal(false)

})