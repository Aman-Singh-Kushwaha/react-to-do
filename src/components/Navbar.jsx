import PropTypes from 'prop-types';

export default function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a href="/" className="navbar-brand">{props.title}</a>
            </div>
        </nav>
    );
}

Navbar.propTypes = {
  title: PropTypes.string
}