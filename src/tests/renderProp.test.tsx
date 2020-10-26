import React, { useState } from 'react'
import { mount } from 'enzyme'
import { expect } from 'chai'

function Mouse(props: { render: (x: number, y: number) => void }) {

    const { render } = props
    const [move, setmove] = useState<{ x: number, y: number }>({ x: 0, y: 0 })

    return (
        <div style={{ height: '100%' }} onMouseMove={(event) => { setmove({ x: event.clientX, y: event.clientY, }) }}>
            {render(move.x, move.y)}
        </div>
    )

}

function App() {
    return (
        <div style={{ height: '100%' }}>
            <Mouse
                render={(x = 0, y = 0) => (
                    <h1>The mouse position is ({x}, {y}) </h1>
                )}
            />
        </div>
    )
}

it('renderProp_mount', () => {

    //不存在renderProp
    //const wrapper = mount(<App />).find(Mouse).renderProp('render')()
    //expect(wrapper.equals(<h1>The mouse position is 0, 0</h1>)).to.equal(true)

})