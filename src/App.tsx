import { useState } from 'react'

import Modal from './Modal'

function App() {
  const [isModalOpen, setModalOpen] = useState(false)

  return <>
    <button onClick={() => setModalOpen(true)}>open</button>
    <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
      <h2>Hi modal</h2>
    </Modal>
  </>

}

export default App
