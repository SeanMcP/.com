import React from 'react'

const useOpen = (defaultOpen = false) => {
  const [isOpen, setIsOpen] = React.useState(defaultOpen)
  const close = () => setIsOpen(false)
  const open = () => setIsOpen(true)
  const toggle = () => setIsOpen(!isOpen)
  return {
    close,
    isOpen,
    open,
    toggle
  }
}

export default useOpen
