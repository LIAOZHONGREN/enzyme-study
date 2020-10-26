import { shallow, mount } from 'enzyme'
import React from 'react';
import MyComponent from '../components/myComponent';
import Foo, { Bar } from '../components/foo';
import { expect } from 'chai'

describe('contains', () => {

    //判断是否存在
    it('contains_mount', () => {
        const w = mount((
            <div>
                <MyComponent />
                <div className='aaa'></div>
                <div value={3}>3</div>
            </div>
        ))
        expect(w.contains(<MyComponent />)).to.equal(true)
        expect(w.contains(MyComponent)).to.equal(true)
        // expect(w.contains('.aaa')).to.equal(true)参数不可以是类
        expect(w.contains(<div className='aaa'></div>)).to.equal(true)
        expect(w.contains(<div value={3}>3</div>)).to.equal(true)
        expect(w.contains(Foo)).to.equal(true)

    })

})