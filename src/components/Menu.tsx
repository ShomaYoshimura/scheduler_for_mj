"use client"

import { useState } from "react"

export default function Menu () {

    const [useDisplay,setDisplay] = useState(false)

    const disprayHandler: React.MouseEventHandler<HTMLDivElement> = (event) =>{
        useDisplay == false ? setDisplay(true):setDisplay(false)
    }

    return (
        <>
        <div className="" onClick={disprayHandler}>menu</div>
        {useDisplay == false ? <></> : <div>menu</div>}
        </>
    )
}