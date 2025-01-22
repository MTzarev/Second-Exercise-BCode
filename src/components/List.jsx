function List () {
    
    const fruits = [ "orange","apple", "banana", "coconat", "pineapple" ]
   let sorted = fruits.sort()
   const listItems = sorted.map(x=><li>{x}</li>)
   
    return( 
        <ol>{listItems}</ol>
    );
}
export default List;