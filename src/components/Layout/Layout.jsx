import React from 'react';
import Header from 'components/Header';
import PropTypes from 'prop-types';

const Layout = props => (
  <div className="max-w-screen-xl mx-auto p-4">
    <Header />
    {props.children}
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
