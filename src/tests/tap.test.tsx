import React, { useState } from 'react'
import { mount } from 'enzyme'
import { expect } from 'chai'

it('tap_mount', () => {

    const result = mount((
        <ul>
            <li>xxx</li>
            <li>yyy</li>
            <li>zzz</li>
        </ul>
    )).find('li')
        .tap((n) => console.log(n.debug()))
        .map((n) => n.text())

})