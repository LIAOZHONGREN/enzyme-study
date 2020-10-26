import { shallow, mount } from 'enzyme'
import React from 'react';
import MyComponent from '../components/myComponent';
import Foo, { Bar } from '../components/foo';
import { expect } from 'chai'

describe('containsAllMatchingElements', () => {

    const items = ['0', '1', '2']

    it('containsAllMatchingElements_mount', () => {
        const w = mount((
            <div>
                <MyComponent items={items} />
                <div className='aaa'></div>
                <div className='bbb'>b</div>
                <div value={3}>3</div>
                <div style={{ position: 'relative', display: 'inline-block' }}></div>
            </div>
        ))

        //判断是否存在 提供的所有元素都匹配存在才返回true
        expect(w.containsAllMatchingElements([
            <MyComponent />,
            <MyComponent items={items} />,
            //<ul></ul>,无法匹配
            <ul><li>0</li><li>1</li><li>2</li></ul>,
            //<ul><li>0</li><li>1</li></ul>,//无法匹配
            //<ul><li></li><li></li><li></li></ul>,//无法匹配
            <Foo />,
            <div></div>,
            <div>3</div>,
            //<div value={3}></div>,//无法匹配
            <div value={3}>3</div>,
            <div className='aaa'></div>,
            //<div className='bbb'></div>,//无法匹配
            <div>b</div>,
            <div className='bbb'>b</div>,
            //<div style={{ position: 'relative'}}></div>//无法匹配
            <div style={{ position: 'relative', display: 'inline-block' }}></div>
        ])).to.equal(true)
    })

})