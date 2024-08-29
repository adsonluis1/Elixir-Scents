import {ReactNode, useEffect } from 'react'

type TFocus = {
    children:ReactNode
}

const Focus = ({children}:TFocus) => {
  useEffect(()=>{const desabilitScroll = (evt:Event)=>{
    evt.preventDefault()
  }
  document.body.style.overflow = "hidden"
  window.addEventListener('wheel', desabilitScroll, { passive: false });
  return () => {
    document.body.style.overflow = ''
    window.removeEventListener('wheel', desabilitScroll);
  }
},[])
    return (
        <>
            {children}
        </>
  )
}

export default Focus