import PropTypes from 'prop-types';
import BootstrapStyle from '../styles/vendor/bootstrap.min.css';
import NProgress from '../styles/vendor/nprogress.css';

const Theme = ({ children }) => (
    <div>
        <style dangerouslySetInnerHTML={{ __html: BootstrapStyle }} />
        <style dangerouslySetInnerHTML={{ __html: NProgress }} />
        {children}
    </div>
);

Theme.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.element
    ]).isRequired,
};

export default Theme;
