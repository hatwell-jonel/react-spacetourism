import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <main className='page__container page__container--home'>
      <section className='content'>
        <div className="home__left">
          <p>SO, YOU WANT TO TRAVEL TO</p>
          <h1>SPACE</h1>
          <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
        </div>
        <div className="home__right">
          <Link to="/destinations" className='explore'>explore</Link>
        </div>
      </section>
    </main>
  )
}

export default Home