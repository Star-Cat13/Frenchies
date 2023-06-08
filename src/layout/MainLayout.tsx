import React, { ReactNode } from "react";
import '../App.css';
// import Header from "../components/header";
// import Footer from "../components/footer";/
// import Navbar from "../components/navbar";



interface MainLayoutProps {
    children: ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
    return (
        <div>
            {/* <Navbar /> */}
            <div className="pagebody">
                
       
                    <div>{children}</div>
                
            </div>
            <Footer />
        </div>
    );
}

export default MainLayout;