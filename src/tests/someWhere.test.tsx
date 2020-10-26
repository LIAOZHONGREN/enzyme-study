import React, { useState } from 'react'
import { mount } from 'enzyme'
import { expect } from 'chai'

it('someWhere_mount', () => {

    const w = mount((
        <div>
            <div className="foo qoo" />
            <div className="foo boo" />
            <div className="foo hoo" />
        </div>
    ))

    //类似数组的some函数
    expect(w.find('.foo').someWhere((n) => n.hasClass('qoo'))).to.equal(true)
    expect(w.find('.foo').someWhere((n) => n.hasClass('foo'))).to.equal(true)
    expect(w.find('.foo').someWhere((n) => n.hasClass('bar'))).to.equal(false)

})