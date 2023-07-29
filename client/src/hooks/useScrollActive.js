import { useEffect } from "react"

const useScrollActive = (state, callback) => {
    const handleScrollActive = () => {
        callback();
    }

    useEffect(()=>{
        window.addEventListener('scroll', handleScrollActive);

    return () => {
      window.removeEventListener('scroll', handleScrollActive);
    }
    },[state])
};

export default useScrollActive;