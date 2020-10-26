import React from 'react'
import { mount } from 'enzyme'
import { expect } from 'chai'
import MyComponent from '../components/myComponent'

class TempCom extends React.Component {

    render() {
        return (
            <div>temp</div>
        )
    }
}

describe('instance', () => {

    it('instance_mount', () => {

        //对于React 16及更高版本，instance（）对于无状态功能组件返回null
        expect(mount(<MyComponent />).instance()).to.equal(null)
        expect(mount(<TempCom />).instance()).to.be.instanceOf(TempCom)

    })

})
