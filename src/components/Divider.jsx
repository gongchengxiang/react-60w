import PropTypes from 'prop-types';
import './Divider.scss';

export default function Divider(props) {
    const { name, bgColor } = props;
    return (
        <div className="divider">
            {
        name
            ? (
                <div className="divider-name-wrap" bg-color={bgColor}>
                    <span>{name}</span>
                    <span style={{ borderColor: bgColor }} />
                </div>
                )
            : ''
      }

        </div>
    );
}
Divider.propTypes = {
    name: PropTypes.string,
    bgColor: PropTypes.string,
};
Divider.defaultProps = {
    name: '',
    bgColor: 'red',
};
