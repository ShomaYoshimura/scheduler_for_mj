"use client"

import { useState } from "react"
import OnClickRooting from "./OnClickRooting"

export default function Menu () {

    const [useDisplay,setDisplay] = useState(false)

    const disprayHandler: React.MouseEventHandler<HTMLDivElement> = (event) =>{
        useDisplay == false ? setDisplay(true):setDisplay(false)
    }

    return (
        <>
        <div className="bg-blue-500 cursor-pointer w-screen text-white font-bold py-2 px-4 rounded" onClick={disprayHandler}>menu</div>
        {useDisplay == false ? <></> : 
        <div className="bg-blue-500" onClick={disprayHandler}>
            <OnClickRooting
            root = "/"
            displayWord="TOPPAGE"
            />
            <OnClickRooting
            root = "/schedule"
            displayWord="schedule"
            />
            <OnClickRooting
            root = "/result"
            displayWord="result"
            />
        </div>}
        </>
    )
}