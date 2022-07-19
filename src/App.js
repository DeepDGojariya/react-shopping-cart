

function App() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Navbar w/ text</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
      <span className="navbar-text">
        Admin
      </span>
  </div>
</nav>
<footer className="bg-light text-center" style={{position:"fixed",bottom:0,width:"100%",padding:"10px 10px 0px 10px",height:"40px"}}>All Rights Reserved</footer>
</>
  );
}

export default App;
