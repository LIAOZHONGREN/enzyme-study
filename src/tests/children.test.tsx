import { shallow, mount } from 'enzyme'
import React from 'react';
import MyComponent from '../components/myComponent';
import Foo from '../components/foo';
import { expect } from 'chai'

describe('children', () => {

    const items = ['0', '1', '2']

    it('children_mount', () => {
        const wrapper = mount(<MyComponent items={items} />);
        expect(wrapper.find('ul').children()).to.have.lengthOf(items.length);
    })

    it('children_shallow', () => {
        const wrapper = shallow(<MyComponent items={items} />);
        expect(wrapper.find('ul').children()).to.have.lengthOf(items.length);
    })

})