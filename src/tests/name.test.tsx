import React from 'react'
import { mount } from 'enzyme'
import { expect } from 'chai'
import Foo from '../components/foo'

it('name_mount', () => {

    expect(mount(<div />).name()).to.equal('div');
    expect(mount(<Foo />).name()).to.equal('Foo');

    Foo.displayName = 'A cool custom name';
    expect(mount(<Foo />).name()).to.equal('A cool custom name');

})