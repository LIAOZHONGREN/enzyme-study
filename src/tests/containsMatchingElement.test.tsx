import { shallow, mount } from 'enzyme'
import React from 'react';
import MyComponent from '../components/myComponent';
import Foo, { Bar } from '../components/foo';
import { expect } from 'chai'

describe('containsMatchingElement', () => {

    const items = ['0', '1', '2']

    it('containsMatchingElement_mount', () => {
        const w = mount((
            <div>
                <MyComponent items={items} />
                <div className='aaa'></div>
                <div className='bbb'>b</div>
                <div value={3}>3</div>
                <div style={{ position: 'relative', display: 'inline-block' }}></div>
            </div>
        ))

        //判断是否存在匹配,存在返回true
        expect(w.containsMatchingElement(<MyComponent />)).to.equal(true)
        expect(w.containsMatchingElement(<MyComponent items={items} />)).to.equal(true)
        expect(w.containsMatchingElement(<div value={3}></div>)).to.equal(false)
    })

})