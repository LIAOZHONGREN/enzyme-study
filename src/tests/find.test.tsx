import { shallow, mount } from 'enzyme'
import React from 'react';
import MyComponent from '../components/myComponent';
import Foo from '../components/foo';
import { expect } from 'chai'

describe('find', () => {

    it('find(寻找)_组件名', () => {
        const wrapper = shallow(<MyComponent />)
        expect(wrapper.find(Foo)).to.have.lengthOf(1)
    });

    it('find(寻找)_类名', () => {
        const w = shallow(<MyComponent />)
        expect(w.find('.my-component')).to.have.lengthOf(1)
    })

    it('contains(包含)', () => {
        const w = shallow(<MyComponent><div className='child'></div></MyComponent>)
        expect(w.contains(<div className='child'></div>)).to.equal(true)
    })

    it('find(寻找)_元素名', () => {
        const w = mount(<MyComponent />)
        expect(w.find('button')).to.have.lengthOf(1)
    })

    it('simulate_模拟事件', () => {
        const w = mount(<MyComponent />)
        w.find('.but').simulate('click')
        expect(w.find(Foo).props().increment).to.equal(1)
    })

})