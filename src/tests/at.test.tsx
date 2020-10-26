import { shallow, mount } from 'enzyme'
import React from 'react';
import MyComponent from '../components/myComponent';
import Foo from '../components/foo';
import { expect } from 'chai'

describe('at', () => {

    //at(index):给定索引定位同级相同的wrapper,并返回它
    //.get(index) => ReactElement - 相同，但是返回React节点本身，没有包装。
    //.first() => ReactWrapper - 与at（0）相同
    //.last() => ReactWrapper
    it('at_mount', () => {
        const wrapper = mount(<Foo />)
        expect(wrapper.find('Bar').at(0).props().foo).to.equal('bar')
    })

    it('at_shallow', () => {
        const wrapper = shallow(<Foo />);
        expect(wrapper.find('Bar').at(0).props().foo).to.equal('bar');
    })

})