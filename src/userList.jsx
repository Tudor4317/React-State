import { useState } from "react"
const colours = ["blue","orange","red"]

export default function List(){


    const random = crypto.randomUUID()
    return (
        
            <Datadisplay list={colours} />
        
    )

    
}


export function Datadisplay(){


const [backgroundColor, setBackgroundcolor] = useState(colours[0])
const [count,countFunction] = useState(0)
const changeColor = (color) =>{
    setBackgroundcolor(color)
    countFunction(count + 1)
}

return (

    <body style={{

        backgroundColor:backgroundColor

    }}>
        {colours.map((color) =>{
            return <button onClick={() => changeColor(color)} key={color}>{color}</button>


        })}

        <p>{count}</p>

    </body>


    


)




}