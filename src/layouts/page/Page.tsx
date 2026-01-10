import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router";
import HomePage from "../../pages/home-page/HomePage";
import WorkInProgress from "../../pages/work-in-progress/WorkInProgress";
import RecipesPage from "../../pages/recipes-page/RecipesPage";
import RecipePage from "../../pages/recipe-page/RecipePage";

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
                <Route path='/recipes' element={<RecipesPage/>}/>
                <Route path='/recipes/:id' element={<RecipePage/>}/>
                <Route path='*' element={<WorkInProgress/>}/>
            </Routes>
        </ScrollToTop>
    );
};

export default Page;