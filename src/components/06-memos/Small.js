//import React, { memo } from 'react'
import React from 'react'

// solo se va a disparar cuando las property cambian
//export const Small = memo(({ value }) => {
export const Small = React.memo(({ value }) => {

    console.log('Me volvi a llamar');

    return (
        <small>{ value }</small>
    )
}
)