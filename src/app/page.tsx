import Head from "next/head";

export default function Home() {
  return (
    <div className="">
      <nav className="main_nav">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div className="home_container title_container">
        <div className="">
          <h1>Lazy Coder</h1>
          <p>A blog for lazy coder to get their coding on.</p>
        </div>
      </div>

      <div className="blogs home_container">
        <div className="blogItem">
          <h1>How to learn JavaScript?</h1>
          <p>JavaScript is the language to build logic in web</p>
        </div>
      </div>
    </div>
  );
}
