import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "../../pages/home-page/HomePage";

const ScrollToTop = (props: { children: any; }) => {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [location]);

    return (
        <>
            {props.children}
        </>
    )
}

const Page = () => {
    return (
        <ScrollToTop>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/halloween' element={<div>next</div>}/>
                <Route path='/contact' element={<div>next 2</div>}/>
            </Routes>
        </ScrollToTop>
    );
};

export default Page;