import Header from './Header';
import Link from 'next/link';
import '../styles/styles.scss'

const layoutStyle = {
  /*margin: 20,
  padding: 20,
  border: '1px solid #DDD'*/
  
};

const Layout = props => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
  </div>
);

export default Layout;