import React , {useState} from 'react';

const ShopCard = () => {

    const [state , setstate] = useState({
        num: 0
    })

    const clickHandler = () => {
        setstate({
            num : state.num + 1 ,
        })
    }

    return (
        <div>
            <div>number: {state.num}</div>
            <button onClick={clickHandler}>shop</button>
        </div>
    );
};

export default ShopCard;