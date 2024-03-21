import React from 'react'
import Cross from '../assets/cross.svg'
import { Input } from 'postcss'
import Button1 from './Button1'

function AutomateTask() {
  return (
    <div>
        <div>
            <h1> AUTOMATE TASK</h1>
            <img src={Cross} alt="cross" className='w-5'/>
        </div>
        <div>
            <div>
                <Input type="text" placeholder="Title"/>
                <Input type="text" placeholder="Description"/>
                <div>
                    <Input type= "number" placeholder="Amount" />
                    <Input type= "date" placeholder="Completion Date" />

                </div>
            </div>
            <div>
                <p>Fill the details of the task you want to be done. make sure the all the fields are filled properly</p>
                <Button1 children={"Publish Task"} />
            </div>
        </div>
    </div>
  )
}

export default AutomateTask