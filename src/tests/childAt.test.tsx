import { shallow, mount } from 'enzyme'
import React from 'react';
import MyComponent from '../components/myComponent';
import Foo,{Bar} from '../components/foo';
import { expect } from 'chai'

describe('childAt', () => {

    it('childAt_mount', () => {
        const wrapper = mount(<MyComponent />)
        expect(wrapper.find(Foo).childAt(0).childAt(0).type()).to.equal(Bar)//组件wrapper.childAt(0)为组件最外层的node
    })

    //shallow无法渲染组件内部的组件
    it('childAt_shallow', () => {
        const wrapper = shallow(<MyComponent />)
        //expect(wrapper.find(Foo).childAt(0).childAt(0).type()).to.equal(Bar)报错
    })

})