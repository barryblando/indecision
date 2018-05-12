import React from 'react';
import ReactDOM, { render } from 'react-dom';

// stateless functional component
const Layout = (props) => {
  return (
    <React.Fragment>
      <p>Header</p>
      { props.children }
      <p>Footer</p>
    </React.Fragment>
  );
};

// p will pe pass as props children
render((
  <Layout>
    <p>This is inline</p>
  </Layout>
), document.getElementById('app'));