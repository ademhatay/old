import React from 'react'
import Header from './components/Header'
import UserList from './components/UserList'

const App = () => {
  return (
    <div className='dark:bg-slate-600'>
      <Header />
      <UserList />
    </div>
  )
}

export default App