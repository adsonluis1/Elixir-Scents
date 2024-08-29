import { useState } from "react"

const useCheckWidth = () => {
    const [screenWidth, setScreenWidth] = useState<number>(0)
    document.body.onresize = () => {
    if(document.body.clientWidth > 480)
      setScreenWidth(document.body.clientWidth)
    }

    return {screenWidth}
}

export default useCheckWidth