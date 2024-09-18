import { useEffect } from "react"

const useDesableScroll = () => {
    useEffect(()=>{
        const main = document.querySelector('main')
        const desabilitScroll = (evt:Event)=>{
            evt.preventDefault()
        }
        main!.style.overflow = "hidden"
        window.addEventListener('wheel', desabilitScroll, { passive: false });
        return () => {
            main!.style.overflow = ''
            window.removeEventListener('wheel', desabilitScroll);
        }
    },[])
}

export default useDesableScroll
