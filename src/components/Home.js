import React, { useState } from 'react'
import Notes from './Notes'
import Noteform from './Noteform'

export default function Home() {
  
  const [reload, setReload] = useState(false)

  return (
    <>
    <Noteform setReload={setReload} />
    <Notes reload={reload} setReload={setReload}/>
    </>
  )
}
