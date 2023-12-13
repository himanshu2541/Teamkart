import React from 'react'
import './utitlity.css'

const Heading1 = ({children, color, fontSize, fontWeight, paddingTop, paddingBottom, paddingRight, paddingLeft, marginTop, marginBottom, marginRight, marginLeft}) => {
    const style = {
        color: color,
        fontSize: fontSize,
        fontWeight: fontWeight,
        paddingTop: paddingTop,
        paddingBottom: paddingBottom,
        paddingRight: paddingRight,
        paddingLeft: paddingLeft,
        marginTop: marginTop,
        marginBottom: marginBottom,
        marginRight: marginRight,
        marginLeft: marginLeft,
    }
    return (
        <h1 className={'heading-1'} style={style}>{children}</h1>
    )
}
export default Heading1
