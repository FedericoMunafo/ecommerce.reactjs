import Item from "../Item/Item";

const ItemList = ({itemsList}) => {    
  return (
    <>
    {itemsList.map((producto) => {
      return (
      <Item
        key={producto.id} 
        name={producto.tittle}
        description={producto.description}
        price={producto.price}
        pictureUrl={producto.pictureUrl}
        />
      );
    })}
    </>
  );
};

export default ItemList;