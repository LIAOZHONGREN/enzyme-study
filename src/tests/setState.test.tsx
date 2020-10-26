import React, { useState } from 'react'
import { mount } from 'enzyme'
import { expect } from 'chai'

type Func = () => any

function Temp() {

    const [value, setvalue] = useState<number>(1)
    const [func, setfunc] = useState<Func[]>([() => 1])
    return (
        <div onClick={() => func[0]()}>{value}</div>
    )
}

it('setState_mount', () => {

    const w = mount(<Temp />)
    expect(w.childAt(0).text()).to.equal('1')
    expect(w.childAt(0).invoke('onClick')()).to.equal(1)
    //setState:只能class组件可以用
    //w.setState({ value: 2, func: [() => 2] })
    //expect(w.childAt(0).text()).to.equal('2')
   // expect(w.childAt(0).invoke('onClick')()).to.equal(2)
})