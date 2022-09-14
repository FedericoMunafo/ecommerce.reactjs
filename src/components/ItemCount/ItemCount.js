import {useState, useEffect} from 'react'
import { Button } from 'react-bootstrap';
import './counter.css'
const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(parseInt(initial));

    const decrease = () => {
        setCount(count - 1);
    }

    const increase = () => {
        setCount (count + 1);
    }

    useEffect(() => {
        setCount(parseInt(initial))
    }, [initial])

  return (
    <div className="counter">
        <button disabled={count <=1} onClick={decrease}>-</button>
        <span>{count}</span>
        <Button disabled={count >= stock} onClick={increase}>+</Button>
            <div>
                <Button disabled={stock <= 0} onClick={() => onAdd(count)}>Agregar al Carrito</Button>
            </div>
    </div>
  )
}

export default ItemCount