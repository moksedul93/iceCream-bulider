import React from 'react'
import Classes from '../Scoop/Scoop.module.css'

const Scoop = ({scoop}) => {
    return (
        <div>
            <div className={[Classes.scoop, Classes[scoop]].join(' ')}></div>
        </div>
    )
}
export default Scoop;