import React from 'react';

export interface IFooProps {
}

export function Bar(props: { foo: string }) {

    const { foo } = props

    return (
        <h1>{foo}</h1>
    )
}

export default function Foo(props: IFooProps) {


    return (
        <div>
            <Bar foo='bar' />
            <button></button>
        </div>
    );
}
