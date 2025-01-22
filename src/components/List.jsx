function List () {
    
    const fruits = [    {name: "orange", calories: 45},
                        {name: "apple", calories: 95}, 
                        {name: "banana", calories: 105}, 
                        {name: "coconat", calories: 159}, 
                        {name: "pineapple", calories:37} 
                    ]
//let listItems = fruits.map(fruit=> <li>{fruit}</li>)
    //    let sorted = fruits.sort()
//    const listItems = sorted.map(x=><li>{x}</li>)
   // ! when we wont to render an aray with objects:
 
   const listItems = fruits.map((x)=><li key={x.name}>{x.name} - calories:{x.calories}</li>)
    
   return( 
        <ol>{listItems}</ol>
    );
}
export default List;