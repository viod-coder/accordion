import React, { useState } from 'react'
import './app.css'
import questions from './data'

import Faq from './Faq'

const App = () => {
  const [items, setItems] = useState(questions)
  return (
    <main>
      <section>
        <header>
          <h3>Questions And Answers About Login</h3>
        </header>
        <div>
          {items.map((t) => (
            <Faq key={t.id} {...t} />
          ))}
        </div>
      </section>
    </main>
  )
}

export default App
