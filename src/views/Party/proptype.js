import PropTypes from 'prop-types';

// associations
import UserPropType from '../User/proptype';

export default PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  abbreviation: PropTypes.string.isRequired,
  politicians: PropTypes.arrayOf(UserPropType),
});
