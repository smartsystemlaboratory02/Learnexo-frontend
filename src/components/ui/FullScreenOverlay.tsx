import React from 'react'

interface OverlayProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

const FullScreenOverlay: React.FC<OverlayProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div 
      className="fixed inset-0 bg-[#444444]/40 flex items-center justify-center z-50"
      onClick={handleOverlayClick}
    >
      <div className="relative">
        {children}
      </div>
    </div>
  )
}

export default FullScreenOverlay
