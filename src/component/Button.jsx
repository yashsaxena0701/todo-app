import React from 'react'

const Button = ({ btnType, name }) => {
    return (
        <div class="col-2">
            <button type="button" className={`btn btn-${btnType} $btn-font-weight: bolder px-3 button`} >{name}</button>
        </div>
    )
}

export default Button