import { useCallback, useState } from "react"

const useToggle = (initToggle = false) => {
  const [toggle, setToggle] = useState(initToggle)

  const handleToggle = useCallback(
    () => {
      setToggle(t => !t)
    },
    [],
  )
  
  return ({
    toggle,
    setToggle,
    handleToggle,
  })
}

export default useToggle