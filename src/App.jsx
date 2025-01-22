import './App.css'
import UserGreeting from './components/UserGreeting'
import List from './components/List'

function App() {
  return (
    <>
    <List/>
    <UserGreeting isLoggedIn = {true} />
    </>
  )
 
}

export default App
