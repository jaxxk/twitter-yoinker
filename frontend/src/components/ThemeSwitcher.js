import React from 'react'

const ThemeSwitcher = () => {
   return (
      <div>
        <div className = "d-flex flex-wrap justify-content-center position-absolute w-100 h-100 align-items-center align-content-center">
          <div class="btn-group">
            <button class="btn btn-secondary btn-lg dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Toggle Trends </button>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#"> January </a>
              <a class="dropdown-item" href="#"> February </a>
              <a class="dropdown-item" href="#"> March </a>
              <a class="dropdown-item" href="#"> April </a>
              <a class="dropdown-item" href="#"> May </a>
              <a class="dropdown-item" href="#"> June </a>
              <a class="dropdown-item" href="#"> July </a>
              <a class="dropdown-item" href="#"> August </a>
              <a class="dropdown-item" href="#"> September </a>
              <a class="dropdown-item" href="#"> October </a>
              <a class="dropdown-item" href="#"> November </a>
              <a class="dropdown-item" href="#"> December </a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#"> Year </a>
            </div>
          </div>
        
        </div>
      </div>
   )
}

export default ThemeSwitcher
