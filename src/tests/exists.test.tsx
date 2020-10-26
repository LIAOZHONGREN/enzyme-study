import React from 'react'
import { mount } from 'enzyme'
import { expect } from 'chai'
import MyComponent from '../components/myComponent'

describe('exists', () => {

    it('exists_mount', () => {
        const w = mount((
            <div>
                <MyComponent />
                <div className='a'></div>
            </div>
        ))
        
        //exists:判断是否存在,无参数判断包装器是否存在,有参数判断包装器内是否存在选择器选中的包装器
        expect(w.find(MyComponent).exists()).to.equal(true)
        expect(w.find(MyComponent).exists('Foo')).to.equal(true)
        expect(w.exists('.a')).to.equal(true)

    })

})