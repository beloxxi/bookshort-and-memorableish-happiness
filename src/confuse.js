
import { useEffect, useState } from "react";
import App from "./App";
import { createPortal } from "react-dom";
import { InitSpin } from "./initial-spin/initial-spin";

export const Confuse = ()=>{

    const [d, setD] = useState(false);

    useEffect(()=>{
        setD(true)
        setTimeout(() => {
            setD(false);
        }, 4500);
    }, []);

    const swap = createPortal(<> <App /> </>, document.querySelector('._moz_webkit__ms_os_fox_proxy___'));

    return(<>
        <main>
            {
                d ?
                    <InitSpin />
                :
                    swap
            }
        </main>
    </>)
};