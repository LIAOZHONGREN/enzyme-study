import React from 'react'
import { mount } from 'enzyme'
import { expect } from 'chai'
import MyComponent from '../components/myComponent'
import Foo, { Bar } from '../components/foo'

it('render_mount', () => {

    const w = mount(<MyComponent />)
    expect(w.find(Foo).render().find('h1')).to.have.lengthOf(1)

})