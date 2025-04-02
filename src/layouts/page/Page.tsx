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
                <Route path='/search' element={<div>search</div>}/>
                <Route path='/settings' element={<div>settings</div>}/>
                <Route path='*' element={<div>Page not found</div>}/>
            </Routes>
        </ScrollToTop>
    );
};

export default Page;