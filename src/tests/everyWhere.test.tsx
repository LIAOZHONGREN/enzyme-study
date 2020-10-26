import React from 'react'
import { mount } from 'enzyme'
import { expect } from 'chai'

describe('everyWhere', () => {

    it('everyWhere_mount', () => {

        const wrapper = mount((
            <div>
                <span className="foo qoo" />
                <span className="foo boo" />
                <span className="foo hoo" />
            </div>
        ));

        //everyWhere:提供一个判断函数,所有匹配返回turn
        expect(wrapper.find('span').everyWhere(n => {
            if (n.hasClass('qoo') || n.hasClass('boo') || n.hasClass('hoo')) return true
            return false
        })).to.equal(true)

    })

})