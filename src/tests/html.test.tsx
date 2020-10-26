import React from 'react'
import { mount } from 'enzyme'
import { expect } from 'chai'
import Foo from '../components/foo'

describe('html', () => {

    it('html_mount', () => {
        const w = mount((
            <div className='root'>
                <Foo />
                <div className='a'>a</div>
            </div>
        ))
        
        //html:类似debug,debug把自定义组件当成一个节点,节点名为组件名,属性名也为转化成原始属性名,比如className.html会完全解析成原始的html文档
        expect(w.html()).to.equal('<div class="root"><div><h1>bar</h1><button></button></div><div class="a">a</div></div>')
        expect(w.find(Foo).html()).to.equal('<div><h1>bar</h1><button></button></div>')
        expect(mount(<div className='a'>a</div>).html()).to.equal('<div class="a">a</div>')

    })

})