import React, { useState } from 'react';
import Foo from './foo'

export interface IMyComponentProps { items?: string[] }

export default function MyComponent(props: IMyComponentProps) {

    const { items, children } = props
    const [value, setvalue] = useState<number>(0)

    return (
        <div className='mycomponent'>
            <Foo increment={value} />
            <div className='my-component'>{children}</div>
            <div className='but' onClick={() => { setvalue(value + 1) }}></div>
            {
                items ? (<ul>
                    {
                        items.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))
                    }
                </ul>) : null
            }
        </div>
    );
}
