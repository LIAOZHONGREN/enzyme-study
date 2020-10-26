import React from 'react'
import { mount } from 'enzyme'
import { expect } from 'chai'
import MyComponent from '../components/myComponent'

describe('forEach', () => {

    it('forEach_mount', () => {
        const w = mount((
            <div className='root'>
                <div className="foo bax" />
                <div className="foo bar" />
                <div className="foo baz" />
            </div>
        ))

        //forEach遍历包装器集合
        let exist = false
        w.find('.foo').forEach((node) => {
            if (node.hasClass('bax')) exist = true
        })
        expect(exist).to.equal(true)

    })

})