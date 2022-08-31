const Item = ({id,title,description,price,pictureUrl,stock}) => {
  return (
    <div>
        <img src={pictureUrl} alt={title}/>
        <h1>{title}</h1>
        <p>{description}</p>
        <p>{price}</p>
        <p>{stock}</p>
    </div>
  );
};

export default Item;