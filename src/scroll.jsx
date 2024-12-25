import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const location = useLocation();

    useEffect(() => {
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 10); // Tambahkan sedikit delay
    }, [location]);

    return null;
};

export default ScrollToTop;
