import { createContext, useContext, useEffect, useState } from "react";
import data from './../api/mattresses.json';

// Creating a global context for mattresses store
const MattressesContext = createContext();

// custom hook to get the mattresses context
const useMattressesContext = () => {
    return useContext(MattressesContext);
}

const MattressesProvider = ({children}) => {
    const [products, setProducts] = useState([]);
    const [active, setActive] = useState(0);
    const [cart, setCart] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(products[0]);
    const [loading, setLoading] = useState(true);
    const [showLoader, setShowLoader] = useState(false);
    const [success, setSuccess] = useState(false);
    const count = cart.reduce((acc, num) => acc + num.quantity, 0);
    const total = cart.reduce((acc, num) => acc + num.price * num.quantity, 0);

    const getProducts = () => {
        const { mattresses } = data;
        let splitObject = [];
        const objectArray = Object.entries(mattresses);

        objectArray.forEach(([key, value]) => {
            splitObject = [...splitObject, {...value, type: key}]
        });

        setSelectedProduct(splitObject[0]);
        setProducts(() => [...splitObject]);
        setLoading(false);
    }

    useEffect(() => {
        getProducts();
    }, []);

    const setActiveProduct = (item, index) => {
        setActive(index);
        setSelectedProduct(item);
    }

    const onAddProduct = (product) => {
        const exist = cart.find(item => item.type === product.type);

        if(exist) {
            setCart(
                cart.map(item => 
                    item.type === product.type ? {...exist, quantity: exist.quantity + 1} : item
                )
            );
        } else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }
    }

    const removeProduct = (type) => {
        setCart(
            cart.filter(item => item.type !== type)
        );
    }

    const onCheckoutOrder = () => {
        setShowLoader(true);
        setSuccess(true);

        setInterval(() => {
            setShowLoader(false);
        }, 3000);

        setCart([]);
    }


    return (
        <MattressesContext.Provider 
        value={
            {
                products, 
                active, 
                cart, 
                selectedProduct,
                onAddProduct,
                setActiveProduct,
                count,
                total,
                removeProduct,
                onCheckoutOrder,
                showLoader,
                success,
                setSuccess
            }
        }>
            {!loading && children}
        </MattressesContext.Provider>
    )
}

export { MattressesContext, MattressesProvider, useMattressesContext};