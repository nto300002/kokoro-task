import { createContext, useCallback, useState } from "react"

type ModalContext = {
  modalOpen: boolean
  setIsModalOpen: (isModalOpen: boolean) => void
}

const defaultContext: ModalContext = {
  modalOpen: false,
  setIsModalOpen: () => {},
}

export const modalContext = createContext<ModalContext>(defaultContext)

export const useModal = (): ModalContext => {
  const [modalOpen, setModalOpen] = useState(false)
  const setIsModalOpen = useCallback((current: boolean): void => {
    setModalOpen(current)
  }, [])
  return {
    modalOpen,
    setIsModalOpen,
  }
}
