import React, { useState } from 'react'
import { mount } from 'enzyme'
import { expect } from 'chai'

function Temp(props: { change: (e: ProgressEvent<HTMLInputElement>) => void }) {

    const { change } = props
    const [value, setvalue] = useState<number>(0)

    return (
        <div onClick={() => { setvalue(value + 1) }}>
            <h1>{value}</h1>
            <input type='text' onChange={change} />
        </div>
    )
}

it('setState_mount', () => {

    let value = ''
    const w = mount(<Temp change={(e) => { value = e.target?.value }} />)
    w.find('input').simulate('change', { target: { value: '8888' } })
    expect(value).to.equal('8888')
    w.childAt(0).simulate('click')
    expect(w.find('h1').text()).to.equal('1')

})