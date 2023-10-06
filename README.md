```tsx

import { createPortal } from 'react-dom';

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void
}
const styleGray: React.CSSProperties = {
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  backgroundColor: 'rgba(220, 220, 220, 0.8)'
}
const styleCanvas: React.CSSProperties = {
  position: 'absolute',
  top: '20rem',
  right: '20rem',
  bottom: '20rem',
  left: '20rem',
  borderStyle: 'solid',
  backgroundColor: '#fff'
}

export default function Modal ({ children, isOpen = false, onClose }: ModalProps) {
  const portalEl = document.getElementById('modal')
  const overPanel = <>
    <div style={styleGray} onClick={onClose}>
    </div>
    <div style={styleCanvas}>
      {
        children
      }
    </div>
  </>

  return isOpen && portalEl ?
    createPortal(overPanel, portalEl) :
    null
}
```