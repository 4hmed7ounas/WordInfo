import React from 'react'

function Alert(props) {
    const Capitalized = (word) =>{
        const Lower = word.toLowerCase();
        return `${Lower[0].toUpperCase()}${Lower.slice(1)}`;
    }
    return (
        <div style={{height: '50px'}}>
        {props.alert && <div className={`alert alert-${props.alert.type}`} role="alert">
        {Capitalized(props.alert.type)}: {props.alert.msg}
        </div>}
        </div>
    )
}

export default Alert
