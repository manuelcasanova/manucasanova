export default function Contact() {
  return (
    <div className="contact-original" id="contact">
      <h2>Contact</h2>
      <p className="email-address">
        <a href="mailto:manucasanova@hotmail.com" className="hide"><i className="fa-solid fa-envelope" /></a>
        <a className="--long2" href="mailto:manucasanova@hotmail.com?subject=Hello Manuel!">manucasanova@hotmail.com</a>
      </p>

      <div className="location-dot">
        <p><i className="fa-solid fa-location-dot"/>Vancouver, B.C.</p>
      </div>

      <p><div className="location-no-dot">Vancouver, B.C.</div></p>

    </div>
  )
}
