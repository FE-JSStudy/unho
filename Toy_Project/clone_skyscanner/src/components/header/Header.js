import Account from './Account';
import ComponentList from '../ComponentList';

import logo from '../../images/logo.svg.png';

function Header(props) {
  return (
    <div className="header">
      <div className="header--top">
        <img src={logo} className="header--logo"></img>
        <Account></Account>
      </div>
      <div className="header--bottom">
        <ComponentList type="page"></ComponentList>
      </div>
    </div>
  );
}

export default Header;