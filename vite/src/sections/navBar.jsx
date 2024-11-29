import React from 'react'

const navBar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 text-white">
        
        <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center py-5 mx-auto c-space">
                <a href='/' className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">
                Andrew Kim
                </a>

            </div>

        </div>
    
    </header>
  )
}

export default navBar