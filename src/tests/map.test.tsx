import React from 'react'
import { mount } from 'enzyme'
import { expect } from 'chai'

it('map_mount', () => {

    const wrapper = mount((
        <div>
            <div className="foo">bax</div>
            <div className="foo">bar</div>
            <div className="foo">baz</div>
        </div>
    ));

    const texts = wrapper.find('.foo').map((node) => node.text())
    expect(texts).to.eql(['bax', 'bar', 'baz'])

})