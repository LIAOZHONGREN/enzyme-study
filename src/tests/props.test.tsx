import React from 'react'
import { mount } from 'enzyme'
import { expect } from 'chai'
import Foo from '../components/foo'

it('props_mount', () => {

    const w = mount((
        <div className='root' value={1}></div>
    ))

    expect(w.find('.root').props().value).to.equal(1)

})