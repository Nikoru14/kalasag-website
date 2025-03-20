import React from 'react'

function Hero() {
    return (
        <section id="home" className="hero flex flex-col items-center justify-center h-screen">
            <div className='flex flex-row items-center justify-center p-4'>
                <img src="./logo.png" alt="vite logo" className="w-200 animate-pulse" />
            </div>
            <h1 className="text-4xl font-bold text-center">
                Von anong naiisip mo?
            </h1>
            <h1 className="text-4xl font-bold text-center">

                <span className="text-blue-500">Design</span> +{' '}
                <span className="text-blue-500">Suggestions</span>!
            </h1>
            <p className="text-lg mt-4">
                Suggest na!
            </p>
        </section >
    )
}

export default Hero