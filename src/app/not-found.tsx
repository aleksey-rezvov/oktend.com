import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="main-wrapper">
      <div className="columns-block container">
        <section className="code404">
          <h1>404: Page Not Found</h1>
          <p>The requested page was not found.</p>
          <p><Link href="/">Go to Home</Link></p>
        </section>
      </div>
    </div>
  )
}
