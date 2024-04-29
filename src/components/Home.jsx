import React from 'react'
import OptionCards from './OptionCards'
import { Link, Outlet } from 'react-router-dom'
import NavBar from './NavBar'
import Body from './Body'

function Home() {
  return (
    <>
    <NavBar/>
    <Body/>
    </>
  )
}

export default Home