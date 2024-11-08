import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <>
      <div className="nav">
        <Link to="/"><h2>Digital Agency</h2></Link>
        <ul>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/courses">Courses</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
        <button className='btn-1'>Start your project </button>
      </div>
      
    </>
  );
};

export default Header;
