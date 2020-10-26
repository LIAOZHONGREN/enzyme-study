import { shallow, mount } from 'enzyme'
import React from 'react';
import MyComponent from '../components/myComponent';
import Foo, { Bar } from '../components/foo';
import { expect } from 'chai'

describe('debug', () => {

    const items = ['0', '1', '2']

    it('debug_mount', () => {
        const w = mount((
            <div>
                <MyComponent items={items} />
                <div className='aaa'></div>
                <div className='bbb'>b</div>
                <div value={3}>3</div>
                <div style={{ position: 'relative', display: 'inline-block' }}></div>
            </div>
        ))

        //debug:输出html结果字符 便于测试不通过时用于查看发现问题
        w.find('.but').simulate('click')
        console.log(w.find(Foo).debug())
        w.find('.but').simulate('click')
        console.log(w.find(Foo).debug())
        console.log(w.find(Foo).debug({ ignoreProps: true }))//ignoreProps:忽略props
        console.log(w.find(MyComponent).debug({ verbose: true }))
        console.log(w.debug({ verbose: true }))

    })

})