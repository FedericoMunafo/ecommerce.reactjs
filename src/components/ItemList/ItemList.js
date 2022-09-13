import Item from "../Item/Item";

const ItemList = ({itemsList}) => {    
  return (
    <>
    {itemsList.map((producto) => {
      return (
      <Item
        id={producto.id} 
        title={producto.title}
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