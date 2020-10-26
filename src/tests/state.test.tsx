import React, { useState } from 'react'
import { mount } from 'enzyme'
import { expect } from 'chai'

function Temp() {

    const [value, setvalue] = useState<number>(1)
    const [func, setfunc] = useState<Func[]>([() => 1])
    return (
        <div onClick={() => func[0]()}>{value}</div>
    )
}

it('state_mount', () => {

   // const w = mount(<Temp />)
   //state:只能class组件可以用
   // expect(w.state().value).to.equal(1)

})