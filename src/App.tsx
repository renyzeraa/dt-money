
import { useState } from "react";
import { Dashboard } from "./components/dashboard";
import { Header } from "./components/header";
import { ModalTransaction } from "./components/modal-transaction";


export function App() {
  const [isTransactionModalOpen, setOpenTransactionModal] = useState(false)

  function handleOpenTransactionModal() {
    setOpenTransactionModal(true)
  }
  function handleCloseTransactionModal() {
    setOpenTransactionModal(false)
  }

  return (
    <>
      <Header onOpenTransactionModal={handleOpenTransactionModal} />
      <Dashboard />
      <ModalTransaction
        isOpen={isTransactionModalOpen}
        onRequestClose={handleCloseTransactionModal}
      />
    </>
  )
}