import React, { useState } from 'react'
import SectionWrapper from './SectionWrapper'
import { SCHEMES, WORKOUTS } from '../util/swoldier'
function Header(props){
  const {index,title,descroption} =props
  return(
    <div className='flex flex-col gap-4 ' >
      <div className='flex items-center justify-center gap-2'>
        <p className='text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400'>{index}</p>
<h4 className='text-xl sm:text-2xl md:text-3xl'>{title}</h4>
      </div>
      <p className='text-sm sm:text-base mx-auto'>{descroption}</p>
    </div>
  )
}
export default function Generator() {
 const [showModal, setShowModal] = useState(false)
 const [poison, setPoison] = useState("individual")
 const [muscles, setMuscles] = useState([])
 const [goals, setGoals] = useState("strength_power")

  function toggleModal(){
    setShowModal(!showModal)
  }
  return (
   <SectionWrapper header={"Generate your Workout"} title={['it\s', 'Huge','o\'clcck' ]}>
    <Header index ={"01"} title={"Pick your Poison"} descroption={"Select the workout you wish to endure"}/>
    <div className='grid grid-cols-2 sm:grid-cols-4 gap-4 p-4'>
    {Object.keys(WORKOUTS).map((type, typeIndex)=>{
      return (
        <button onClick={()=>{
          setPoison(type)
        }} className={'bg-slate-900 border border-blue-400 py-3 duration-200 hover:border-blue-600 rounded-lg' +(type===poison? "border-blue-600 ": "border-blue-400")} key={typeIndex}>
          <p className='capitalize '>{type.replaceAll("_"," ")}</p>
        </button>
      )
    })}
    </div>
    <Header index ={"02"} title={"Lock on targets"} descroption={"Select the muscles judged for annihilation. "}/>
    <div className='bg-slate-950  border border-solid border-blue-400 rounded-lg flex flex-col '>
    <button onClick={toggleModal} className='relative py-3 flex items-center justify-center'>
      <p>Select muscle groups</p>
      <i className="fa-solid fa-caret-down absolute right-3 top-1/4"></i>
    </button>

    {
      showModal &&(
        <div>
          Modal
        </div>
      )
    }
    </div>

    <Header index ={"03"} title={"Become Juggernaut"} descroption={"Select your ultimate objective."}/>
    <div className='grid grid-cols-3  gap-4 p-4'>
    {Object.keys(SCHEMES).map((scheme, schemeIndex)=>{
      return (
        <button className='bg-slate-900 border border-blue-400 py-3 duration-200 hover:border-blue-600 rounded-lg' key={schemeIndex}>
          <p className='capitalize '>{scheme.replaceAll("_"," ")}</p>
        </button>
      )
    })}
    </div>
     
   </SectionWrapper>
  )
}
