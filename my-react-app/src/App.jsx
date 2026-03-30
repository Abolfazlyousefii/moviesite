import { useState } from 'react'
import './App.css'

const featuredContent = [
  {
    title: 'Dune: Part Two',
    type: 'فیلم',
    year: '2024',
    genre: 'علمی‌تخیلی',
    rating: '8.7',
  },
  {
    title: 'Severance',
    type: 'سریال',
    year: '2022',
    genre: 'درام / معمایی',
    rating: '8.6',
  },
  {
    title: 'The Batman',
    type: 'فیلم',
    year: '2022',
    genre: 'اکشن / جنایی',
    rating: '8.1',
  },
  {
    title: 'Shōgun',
    type: 'سریال',
    year: '2024',
    genre: 'تاریخی / جنگی',
    rating: '8.8',
  },
]

function App() {
  const [theme, setTheme] = useState('dark')

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))
  }

  return (
    <div className={`app theme-${theme}`}>
      <header className="topbar">
        <div>
          <p className="eyebrow">Cinema Hub</p>
          <h1>سایت فیلم و سریال</h1>
        </div>
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === 'dark' ? 'حالت لایت' : 'حالت دارک'}
        </button>
      </header>

      <section className="hero">
        <h2>بهترین فیلم‌ها و سریال‌ها را یک‌جا پیدا کن</h2>
        <p>
          در تم دارک از ترکیب مشکی و زرد استفاده شده و در تم لایت، رنگ‌های سفید و
          آبی آسمانی در کل سایت اعمال می‌شود.
        </p>
      </section>

      <section className="grid">
        {featuredContent.map((item) => (
          <article className="card" key={`${item.title}-${item.type}`}>
            <span className="badge">{item.type}</span>
            <h3>{item.title}</h3>
            <ul>
              <li>سال انتشار: {item.year}</li>
              <li>ژانر: {item.genre}</li>
              <li>امتیاز: {item.rating}</li>
            </ul>
          </article>
        ))}
      </section>
    </div>
  )
}

export default App
