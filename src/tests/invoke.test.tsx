import React, { useState } from 'react'
import { mount } from 'enzyme'
import { expect } from 'chai'

function TempCom() {

    const [value, setvalue] = useState<number | string>(0)

    function click(v: number | string) {
        setvalue(v)
        return v
    }

    return (
        <div className='but'  onClick={(v) => click(v)}>{value}</div>
    )

}



it('invoke_mount', () => {

    const w = mount(<TempCom />)
    const value = 3
    //invoke:调用属性方法,可传递参数
    expect(w.find('.but').invoke('onClick')(value)).to.equal(value)
    expect(w.find('.but').getDOMNode().textContent).to.equal(`${value}`)
})

