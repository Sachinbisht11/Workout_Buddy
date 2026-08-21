import { useContext } from "react"
import { WorkoutsContext } from "../context/WorkoutContext"


export const useWorkoutContext=()=>{
    const context=useContext(WorkoutsContext)

    if(!context){
        throw Error('context error')
    }

    return context
}