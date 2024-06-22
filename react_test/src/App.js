import { useEffect, useState } from "react";

function App() {
    const [data, setData] = useState(null);
    const [toggle, setToggle] = useState(false);
    const [value, setValue] = useState("");

    const onClick = () => setToggle((prev) => !prev);

    useEffect(() => {
        setTimeout(() => {
            setData({});
        }, 100);
    }, []);

    return (
        <div>
            <h1 data-testid={"value-elem"}>{value}</h1>
            {toggle === true && <div data-testid="toggle-elem">toggle</div>}
            {data && <div>data</div>}
            <h1>hello world</h1>
            <button onClick={onClick} data-testid="toggle-btn">
                click me
            </button>
            <input onChange={(e) => setValue(e.target.value)} type="text" placeholder={"input value...."} />
        </div>
    );
}

export default App;
