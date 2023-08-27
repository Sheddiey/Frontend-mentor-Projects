const products = [
    {title: 'Cabbage', id: '1'},
    {title: 'Garlic', id: '2'},
    {title: 'Apple', id: '3'},
]

//use mapfunction to transform an array of products into an array of <li> items

const ListItems = products.map(product => 
    <li key={product.id}>
    {product.title}
    </li>
    );

    function ListItemsFunction () {
        return (
        <ul>{ ListItems }</ul>
    )
    }

    export default ListItemsFunction;
    