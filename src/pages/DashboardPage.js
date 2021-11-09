import React from 'react'
import { Link } from 'react-router-dom'

const DashboardPage = () => (
  <section>
    <h1>Comments page</h1>
    <p>This is the Comments page.</p>

    <Link to="/comments" className="button">
      View Comments
    </Link>
  </section>
)

export default DashboardPage