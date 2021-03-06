const NavBar = ()=>{

    return(

                <nav class="navbar navbar-expand-lg navbar-light bg-primary">
      <a class="navbar-brand" href="/">
        Home
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav ml-auto">
          <a class="nav-link active" href="/static">
            Static
          </a>
          <a class="nav-link" href="/responsive">Responsive</a>
          <a class="nav-link" href="/dynamic">Dynamic</a>
          
        </div>
      </div>
    </nav>
      
    )
}

export default NavBar