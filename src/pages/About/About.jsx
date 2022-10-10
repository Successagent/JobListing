import '../About/About.css'

const About = () => {
  return (
    <div className="about-page">
      <div className="about-hero-section">
        <h1 className="h1">About Us</h1>
        <ul className="flex">
          <li className="li">Home</li>
          <li className="li">About Us</li>
        </ul>
      </div>
      <div className="about-part-two">
        <h2 className="h2">Why Pinlist?</h2>
        <p className="p">
          Majority have suffered alteration in some form, by injected humor
        </p>
        <h5 className="h5">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered by injected humour, or randomised words
          which don't look even slightly believable. If you are going to use a
          passage of Lorem Ipsum, you need to as necessary All the Lorem Ipsum
          generators on the Internet tend to repeat
        </h5>
        <h5 className="h5">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
        </h5>
        <h5 className="h5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </h5>
      </div>
      <div className="about-part-three">
        <h2 className="h2">How It Works?</h2>
        <p className="p">
          Mauris ut cursus nunc. Morbi eleifend, ligula at consectetur vehicula
        </p>
        <div className='grid'></div>
      </div>
    </div>
  )
}

export default About
