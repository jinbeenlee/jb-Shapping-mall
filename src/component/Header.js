import React from 'react'

export default function Header() {
  return (
    <div className="header">
      <nav class="uk-navbar-container" uk-navbar>
        <h1>LOgo</h1>
        <div class="uk-navbar-left">
          <ul class="uk-navbar-nav">
            <li class="uk-active">All</li>
            <li>
             interier items
              <div class="uk-navbar-dropdown">
                <ul class="uk-nav uk-navbar-dropdown-nav">
                  <li class="uk-active">lamp</li>
                  <li>lamp</li>
                  <li>carpet</li>
                </ul>
              </div>
            </li>
            <li>furniture</li>
          </ul>

        </div>
      </nav>
    
    
    </div>
  )
}
