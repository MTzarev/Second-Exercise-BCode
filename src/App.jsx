import './App.css'
import UserGreeting from './components/UserGreeting'
import List from './components/List'

function App() {

      
  const fruits = [ {id:1, name: "orange", calories: 45},
                   {id:2, name: "apple", calories: 95}, 
                   {id:3, name: "banana", calories: 105}, 
                   {id:4, name: "coconat", calories: 159}, 
                   {id:5, name: "pineapple", calories:37}];

   const vegetables = [ {id:1, name: "potatoes", calories: 110},
                    {id:2, name: "celery", calories: 15}, 
                    {id:3, name: "carrots", calories: 25}, 
                    {id:4, name: "corn", calories: 63}, 
                    {id:5, name: "broccoli", calories:50}];
  return (
    <>
    <List items={fruits} category="Fruits"/>
    <List items={vegetables} category="Vegetables"/>

    <UserGreeting isLoggedIn = {true} />
    </>
  );
 
};

export default App
