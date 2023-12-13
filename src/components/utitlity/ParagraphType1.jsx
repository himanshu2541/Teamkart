import React from 'react'
import './utitlity.css'
const ParagraphType1 = ({children, color, fontSize, fontWeight, paddingTop, paddingBottom, paddingRight, paddingLeft, marginTop, marginBottom, marginRight, marginLeft}) => {
    const styles = {
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
        <p className={'paragraph-type-1'} style={styles}>{children}</p>
    )
}
export default ParagraphType1
