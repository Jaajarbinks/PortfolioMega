import React from 'react'

export default function Contact() {
  return (
    <div className="contacts">
      <h1>You Can Reach Me Here</h1>
      <p className="contactMe">
        Hi there if you have any questions feel free to contact me here at the
        following.
      </p>
      <ul className="contactlist">
        <li>Jaajarbinks@yahoo.com</li>
        <li>
          <a target="blank" href="https://github.com/Jaajarbinks">
            GitHub
          </a>
        </li>
        <li>
          <a
            target="blank"
            href="https://www.linkedin.com/in/david-larsen-24284a229/"
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </div>
  )
}
