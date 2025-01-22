function List () {
    
    const fruits = [    {id:1, name: "orange", calories: 45},
                        {id:2, name: "apple", calories: 95}, 
                        {id:3, name: "banana", calories: 105}, 
                        {id:4, name: "coconat", calories: 159}, 
                        {id:5, name: "pineapple", calories:37} 
                    ]
//let listItems = fruits.map(fruit=> <li>{fruit}</li>)
    //    let sorted = fruits.sort()
//    const listItems = sorted.map(x=><li>{x}</li>)
   // ! when we wont to render an aray with objects:

   //fruits.sort ((a,b)=>a.name.localeCompare(b.name))
fruits.sort((a,b)=>b.calories-a.calories)
   const listItems = fruits.map((x)=><li key={x.id}>
    {x.name} &nbsp; <b>calories:
    {x.calories}</b></li>
    );
    
   return( 
        <ol>{listItems}</ol>
    );
}
export default List;