import { useState, useCallback, useRef, useMemo } from "react";
import Content from "./Content";

function App() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [products, setProducts] = useState([]);

    const handleClick = () => {
        setProducts([
            ...products,
            {
                name,
                price: +price,
            },
        ]);
        setName("");
        setPrice("");
    };

    const total = useMemo(() => {
        const result = products.reduce(
            (result, product) => result + product.price,
            0
        );
        return result;
    }, [products]);

    return (
        <div className="App" style={{ padding: 50 }}>
            <input
                value={name}
                placeholder="Enter Name"
                onChange={(e) => setName(e.target.value)}
            />
            <br />
            <input
                value={price}
                placeholder="Enter Price"
                onChange={(e) => setPrice(e.target.value)}
            />
            <br />
            <button onClick={handleClick}>Add</button>
            Total: {total}
            <ul>
                {products.map((product, index) => (
                    <li key={index}>
                        {product.name}-{product.price}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
