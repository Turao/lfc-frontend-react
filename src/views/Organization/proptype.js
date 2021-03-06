import PropTypes from 'prop-types';

import EventPropType from '../Event/proptype';

export default PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  event: PropTypes.arrayOf(EventPropType),
});
