import Home from "../pages/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./NotFound";
import Layout from "../pages/Layout";
function Router(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout> <Home/> </Layout>} />
            <Route path="*" element={<Layout><NotFound/></Layout>} />
        </Routes>
        
        </BrowserRouter>
    );
}
export default Router