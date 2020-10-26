import React from 'react'
import { mount } from 'enzyme'
import { expect } from 'chai'

describe('every', () => {

    it('every_mount', () => {

        const wrapper = mount((
            <div>
                <div className="foo qoo" />
                <div className="foo boo" />
                <div className="foo hoo" />
                <div id='a'></div>
                <div id='a'></div>
                <div id='b'></div>
                <span id='b'></span>
            </div>
        ));

        //every:所有匹配返回turn
        expect(wrapper.find('.foo').every('.foo')).to.equal(true)
        expect(wrapper.find('.foo').every('.qoo')).to.equal(false)
        expect(wrapper.find('.foo').every('.bar')).to.equal(false)
        expect(wrapper.find('#a').every('div')).to.equal(true)
        expect(wrapper.find('#b').every('span')).to.equal(false)

    })

})