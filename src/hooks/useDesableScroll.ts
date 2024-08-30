import { useEffect } from "react"

const useDesableScroll = () => {
    useEffect(()=>{
        const desabilitScroll = (evt:Event)=>{
            evt.preventDefault()
        }
        document.body.style.overflow = "hidden"
        window.addEventListener('wheel', desabilitScroll, { passive: false });
        return () => {
            document.body.style.overflow = ''
            window.removeEventListener('wheel', desabilitScroll);
        }
    },[])
}

export default useDesableScroll
