import { useEffect, useState } from 'react';
import './index.css';
let renderCount = 0;
function Differ17() {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    useEffect(() => {

    }, )

    const handleClick = () => {
        setCount1( count1 + 1 )
        setCount2( count2 + 1 )
    };
    const handleClick2 = () => {
        setTimeout(() => {
            setCount1( count1 + 1 )
            setCount2( count2 + 1 )
        }, 0);
    };
    console.log('Differ17 render');
    ++renderCount;
    return (
        <div className='differ'>
            <header className='differ-header'>
                <p>Differ17 render: { renderCount }</p>
                <p>
                    <button type='button' onClick={handleClick}>
                       批处理 count1 is: {count1}
                    </button>
                    <button type='button' onClick={handleClick2}>
                       异步批处理 count2 is: {count2}
                    </button>
                </p>
            </header>
        </div>
    );
}

export default Differ17;
