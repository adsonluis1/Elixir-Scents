import {ReactNode} from 'react'
import useDesableScroll from '../../hooks/useDesableScroll'

type TFocus = {
    children:ReactNode
}

const Focus = ({children}:TFocus) => {
  useDesableScroll()
    return (
        <>
            {children}
        </>
  )
}

export default Focus