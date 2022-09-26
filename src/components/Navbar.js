import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <header>
      <input type="checkbox" name="" id="nav-chk1" />
      <div class="nav-logo">
        <a href='https://github.com'><img src="images/logo.png" id="nav-Logo-img" alt="" /></a>
        <div class="nav-logo-text">
          <a href='https://github.com'>
            <span>P</span>oint
            <span>O</span>f
            <span>S</span>ale
          </a>
        </div>
      </div>
      <div class="nav-search-box">
        <form>
          <input type="text" name="search" id="nav-srch" placeholder="Search" />
          <button type="submit"><i class="fa fa-search"></i></button>
        </form>
      </div>
      <ul>
        <li><a href="#"><i class="fa fa-product-hunt"></i> Products</a></li>
        <li><a href="#"><i class="fa fa-bell"></i> Notifications</a></li>
        <li><a href="https://github.com"><i class="fa fa-user"></i> Profile</a></li>
        <li><a href="https://github.com"><i class="fa fa-cog"></i> Settings</a></li>
          <button id='btn-signin'>Sign in</button>
          <button id='btn-signup'>Sign up</button>
      </ul>
      <div class="nav-menu">
        <label for="nav-chk1">
          <i class="fa fa-bars"></i>
        </label>
      </div>
    </header>
  );
};

export default Navbar;