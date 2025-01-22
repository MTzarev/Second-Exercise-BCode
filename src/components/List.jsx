function List (props) {

    const category = props.category;
    const itemList = props.items;

const listItems = itemList.map((x)=><li key={x.id}>
                            {x.name} &nbsp; <b>calories:
                            {x.calories}</b></li>);
    
   return( 
    <>
        <h1>{category}</h1>
        <ol>{listItems}</ol>
    </>
    );
}
export default List;