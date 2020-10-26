import React from 'react'
import { mount } from 'enzyme'
import { expect } from 'chai'
import MyComponent from '../components/myComponent'

describe('get', () => {

    it('get_mount', () => {
        const w = mount((
            <div className='root'>
                <div className="foo bax" />
                <div className="foo bar" />
                <MyComponent className="foo baz" items={[1, 2, 3]} />
            </div>
        ))

        //get同at,但get返回的是ReactElement,at返回的是包装器
        const items = w.find('.foo').get(2).props.items
        expect(items ? items.length : 0).to.equal(3)

    })

})