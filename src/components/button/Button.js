import React from 'react';

const Button = ({ item, setActiveProduct, index, active }) => {
    return (
        <>
            <button
                key={item.type} 
                onClick={() => setActiveProduct(item, index)} 
                type="button"
                className={`btn ${index === active ? 'active' : ''}`}>
                    {item.name}
            </button>
        </>
    );
}

export default React.memo(Button);
// export const MemoizedButton = React.memo(Button);
