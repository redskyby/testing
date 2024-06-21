import {useEffect, useState} from "react";

function App() {
    const [data, setData] = useState(null)
    useEffect(() => {
            setTimeout(() => {
                setData({})
            }, 100)
        },
        [])

    return (
        <div>
            {data && <div>data</div>}
            <h1>hello world</h1>
        </div>
    );
}

export default App;
