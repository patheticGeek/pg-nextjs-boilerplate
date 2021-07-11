import React from 'react'

import Footer from '@components/Footer'

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 flex flex-col items-center justify-center">
        <h1 className="text-4xl mb-8">
          Welcome to{' '}
          <a
            href="https://nextjs.org"
            className="text-purple-600 hover:border-b-2 border-purple-600">
            Next.js!
          </a>
        </h1>

        <p className="mb-8">
          Get started by editing{' '}
          <code className="py-1.5 px-2 bg-gray-100 rounded-lg">
            pages/index.js
          </code>
        </p>

        <div className="flex justify-center flex-wrap">
          <a
            href="https://github.com/patheticGeek/pg-nextjs-boilerplate"
            className="w-80 p-6 border border-gray-300 hover:border-gray-600 transition-all rounded-lg m-2">
            <h2 className="text-2xl mb-3">Open on GitHub &rarr;</h2>
            <p>Checkout the code</p>
          </a>
          <a
            href="https://github.com/patheticGeek/pg-nextjs-boilerplate/fork"
            className="w-80 p-6 border border-gray-300 hover:border-gray-600 transition-all rounded-lg m-2">
            <h2 className="text-2xl mb-3">Fork on GitHub &rarr;</h2>
            <p>Start developing now!</p>
          </a>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Home
