import React from 'react'
import { mount } from 'enzyme'
import { expect } from 'chai'

it('is_mount', () => {

    const w = mount((
        <div>
            <div className='a b'></div>
            <div className='a' value='b'></div>
        </div>
    ))

    
    //expect(w.find('.a').is('.b')).to.equal(true)//报错:必须确保类a是唯一的(必须保证调用is的包装器是单节点)
    expect(w.find('.b').is('.a')).to.equal(true)
    expect(w.find({ value: 'b' }).is('.a')).to.equal(true)
})