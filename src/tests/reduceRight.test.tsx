import React from 'react'
import { mount } from 'enzyme'
import { expect } from 'chai'

it('reduceRight_mount', () => {

    const w = mount((
        <div>
            <div className='a'>a</div>
            <div className='a'>b</div>
            <div className='a'>c</div>
        </div>
    ))

    //reduceRight:参数1为遍历调用的方法(此方法的参数1用于记录上次遍历调用方法的返回值,它的初始值是reduceRight的第二个参数值,如果不提供reduceRight的第二个参数,那么它的初始值为第一次遍历的单节点包装器,遍历将从第二个单节点开始;
    //参数2为当前遍历的单节点包装器;参数3为当前遍历的单节点包装器的索引);参数2为第一次遍历的遍历方法的参数1的初始值
    //同reduce,但是它是遍历从右边开始
    expect(w.find('.a').reduceRight((v, n, i) => v + n.text(), '#')).to.equal('#cba')
    expect(w.find('.a').reduceRight((v, n, i) => {
        if (typeof v !== 'string')return v.text() + n.text()
        return v + n.text()
    })).to.equal('cba')

})