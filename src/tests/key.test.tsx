import React from 'react'
import { mount } from 'enzyme'
import { expect } from 'chai'

it('key_mount', () => {

    const w = mount((
        <div className='root'>
            {
                [1, 2, 3].map((item, index) => (
                    <div id='li' key={item}>{item}</div>
                ))
            }
        </div>
    ))

    expect(w.find('#li').at(0).key()).to.equal('1')
    expect(w.find('#li').at(1).key()).to.equal('2')

})