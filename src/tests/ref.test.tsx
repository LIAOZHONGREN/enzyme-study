import React from 'react'
import { mount } from 'enzyme'
import { expect } from 'chai'

function TempCom() {

    return (
        <div>
            <div ref='a'>a</div>
            <div ref='a'>b</div>
            <div ref='a'>c</div>
        </div>
    )

}

class Temp extends React.Component {

    render() {
        return (
            <div>
                <span ref="firstRef" amount={2}>First</span>
                <span ref="secondRef" amount={4}>Second</span>
                <span ref="thirdRef" amount={8}>Third</span>
            </div>
        )
    }

}

it('ref_mount', () => {

    const w = mount(<Temp />)
    //有毒
  //  expect(w.ref('secondRef').innerText).to.equal('Second')

})