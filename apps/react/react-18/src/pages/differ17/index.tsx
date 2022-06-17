import { useEffect, useState } from 'react';
import './index.css';
let renderCount = 0;
function Differ17() {
    const [count, setCount] = useState(0);
    const [useEffectCount, setUseEffectCount] = useState(0);
    const [useEffectCountFun, setUseEffectCountFun] = useState(0);
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    useEffect(() => {
        console.log('useEffect');
    })

    useEffect(() => {
        setUseEffectCount(count + 1);
        setUseEffectCountFun(count => count + 1);
    }, [count]);

    const handleClick = () => {
        setCount1(count1 + 1);
    //     setCount2(count2 + 1);
    };
    const handleClick2 = () => {
        setTimeout(() => {
            setCount1(count1 + 1);
            setCount2(count2 + 1);
        }, 0);
    };
    console.log('Differ17 render');
    ++renderCount;
    return (
        <div className='differ'>
            <header className='differ-header'>
                <p>Differ17 render: {renderCount}</p>
                <p>
                    <button type='button' onClick={() => setCount(count => count + 1)}>
                        count is: {count}
                    </button>
                    <br />
                    <span>在依赖count的useEffect中通过setUseEffectCount(count + 1) 设置的 count is: {useEffectCount}</span>
                    <br />
                    <span>在依赖count的useEffect中通过setUseEffectCountFun(count ={'>'} count + 1) 设置的 count is: {useEffectCountFun}</span>
                    <br />
                    <button type='button' onClick={handleClick}>
                        批处理 count is: {count1}
                    </button>
                    <br />
                    <button type='button' onClick={handleClick2}>
                        异步批处理 count is: {count2}
                    </button>
                </p>
            </header>
        </div>
    );
}

export default Differ17;
