import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/NavBar";
import Home from "./components/home/Home";
import { Route, Routes } from "react-router";
import { ThemeProvider } from "./components/theme-provider/ThemeProvider";
import MyWorks from "./components/my-works/MyWorks";
import Details from "./components/details/Details";

function App() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <div className="min-h-screen max-w-325 flex flex-col mx-auto">
                <Navbar />
                <div className="flex-1">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/my-works" element={<MyWorks />} />
                        <Route path="/details/:id" element={<Details />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </ThemeProvider>
    );
}

export default App;
