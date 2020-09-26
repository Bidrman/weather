import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import styles from '../../styles/styles.global.scss'
import Homepage from '../../views/Homepage'
import NavbarContainer from '../../views/Contacts'
import Weather from '../../views/Weather'
import Map from '../../views/Map'

export default function App() {
  return (
    <Router>
      <div className="navigation">
        <nav>
          <ul className="navigation-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/pocasi">Počasí</Link>
            </li>
            <li>
              <Link to="/mapa">Mapa</Link>
            </li>
            <li>
              <Link to="/kontakty">Kontakty</Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <div className="body">
        <Switch>
          <Route path="/" exact>
            <Homepage />
          </Route>
          <Route path="/pocasi">
            <Weather />
          </Route>
          <Route path="/mapa">
            <Map />
          </Route>
          <Route path="/kontakty">
            <NavbarContainer />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
