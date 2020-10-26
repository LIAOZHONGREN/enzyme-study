import React, { useState } from 'react'
import { mount } from 'enzyme'
import { expect } from 'chai'

it('slice_mount', () => {

    const w = mount((
        <div>
            <div className="foo bax" />
            <div className="foo bar" />
            <div className="foo baz" />
        </div>
    ))

    //slice:获取单节点集合的片段(与数组的slice函数相同),第二个参数默认为集合长度,第一个参数为闭区间,第二个参数为开区间,返回一个新包装器
    expect(w.find('.foo').slice(1)).to.have.lengthOf(2)
    expect(w.find('.foo').slice(1).at(0).hasClass('bar')).to.equal(true)
    expect(w.find('.foo').slice(1).at(1).hasClass('baz')).to.equal(true)
    expect(w.find('.foo').slice(1, 2)).to.have.lengthOf(1)
    expect(w.find('.foo').slice(1, 2).at(0).hasClass('bar')).to.equal(true)

})