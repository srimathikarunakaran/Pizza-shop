import { useSelector } from "react-redux";






function DataRecive()
{


const name = useSelector((state) => state.name)
const age = useSelector((state) => state.age)
const phone = useSelector((state) => state.phone)


    return(
        <>
        <div>

            <h1>hello: {name} {age} {phone}</h1>
            </div>
            </>
    )
}


export default DataRecive;