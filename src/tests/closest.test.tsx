import { shallow, mount } from 'enzyme'
import React from 'react';
import MyComponent from '../components/myComponent';
import Foo from '../components/foo';
import { expect } from 'chai'

describe('closest', () => {

    //为发现有什么用
    it('closest_mount', () => {
        const wrapper = mount((
            <div>
                <div className='bar'></div>
                <Foo className='bar' />
            </div>
        ));
        expect(wrapper.find('Foo').closest('.bar')).to.have.lengthOf(1);
    })

    // it('children_shallow', () => {
    //     const wrapper = shallow((<div><Foo className='bar' /><MyComponent /></div>));
    //     expect(wrapper.find(MyComponent).find(Foo).closest('.bar')).to.have.lengthOf(1);
    // })

})