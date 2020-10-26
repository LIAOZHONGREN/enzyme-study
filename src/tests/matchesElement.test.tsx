import { shallow, mount } from 'enzyme'
import React from 'react';
import MyComponent from '../components/myComponent';
import Foo, { Bar } from '../components/foo';
import { expect } from 'chai'

describe('matchesElement', () => {

    const items = ['0', '1', '2']

    it('matchesElement_mount', () => {
        const w = mount((
            <div>
                <MyComponent items={items} />
                <div className='a'></div>
                <div className='b'>b</div>
                <div className='c'>&nbsp;c&nbsp;</div>
                <div className='d'>d&nbsp;d&nbsp;d</div>
                <div className='e' value={3}></div>
                <div className='f' value={3} value2={3}></div>
                <div className='g' style={{ position: 'relative', display: 'inline-block' }}></div>
            </div>
        ))

        expect(w.find(MyComponent).matchesElement(<MyComponent/>)).to.equal(true)
        expect(w.find(MyComponent).matchesElement(<MyComponent  items={items} />)).to.equal(true)
        expect(w.find('.a').matchesElement(<div></div>)).to.equal(true)
        expect(w.find('.a').matchesElement(<div className='a'></div>)).to.equal(true)
        expect(w.find('.b').matchesElement(<div></div>)).to.equal(false)//匹配不通过:标签名必须匹配,存在text节点必须匹配text节点
        expect(w.find('.b').matchesElement(<div>&nbsp;b&nbsp;</div>)).to.equal(true)//text节点的左右的空格会被忽略
        expect(w.find('.c').matchesElement(<div>c</div>)).to.equal(true)//text节点的左右的空格会被忽略
        expect(w.find('.d').matchesElement(<div>ddd</div>)).to.equal(false)//匹配不通过:中间的空格不可忽略
        expect(w.find('.d').matchesElement(<div>d&nbsp;d&nbsp;d</div>)).to.equal(true)
        expect(w.find('.e').matchesElement(<div value={'3'}></div>)).to.equal(false)//匹配不通过:提供prop属性,那它必须存在且数值必须相同
        expect(w.find('.e').matchesElement(<div value={3}></div>)).to.equal(true)
        expect(w.find('.f').matchesElement(<div value2={3} value={3}></div>)).to.equal(true)
        expect(w.find('.g').matchesElement(<div style={{ position: 'relative' }}></div>)).to.equal(false)//style数值必须相同
        expect(w.find('.g').matchesElement(<div style={{ display: 'inline-block', position: 'relative' }}></div>)).to.equal(true)

    })

})