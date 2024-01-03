import React, { useState } from 'react'
import Notes from './Notes'
import Users from './UserForm'
import Noteform from './Noteform'

export default function Home() {
  
  const [reload, setReload] = useState(false)

  return (
    <>
    <Users/>
    <Noteform setReload={setReload} />
    <Notes reload={reload} setReload={setReload}/>
    </>
  )
}
