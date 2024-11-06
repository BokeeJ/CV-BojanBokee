import { useEffect, useState } from "react";
import { TiArrowUpThick } from "react-icons/ti";


function ScrollTop() {
    const [seen, setSeen] = useState(false);
    const zeka = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });

    }

    useEffect(() => {
        const handlescroll = () => {
            if (window.scrollY > 200) {
                setSeen(true)
            }
            else {
                setSeen(false)
            }
        };
        window.addEventListener('scroll', handlescroll);
        return () => {
            window.removeEventListener('scroll', handlescroll);
        };
    }, []);


    return (
        <div className={`fixed right-0 bottom-10 w-[80px] hover:opacity-100  h-[60px] rounded-3xl transition-all duration-500 ${seen ? 'opacity-80 translate-y-4 block' : 'opacity-0 hidden translate-y-4'
            }`}>
            <button onClick={zeka} className="bg-gray-600 w-full h-full rounded-l-2xl text-white flex justify-center items-center"><TiArrowUpThick color="white" size={40} /></button>
        </div>
    )
}

export default ScrollTop