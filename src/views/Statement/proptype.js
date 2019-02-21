import PropTypes from 'prop-types';

// associations
import UserPropType from '../User/proptype';
import EventPropType from '../Event/proptype';
import FactCheckPropType from '../FactCheck/proptype';

export default PropTypes.shape({
  id: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  politician: UserPropType.isRequired,
  factchecks: PropTypes.arrayOf(FactCheckPropType),
  // ! circular dependency below (FIX IT)
  // event: EventPropType.isRequired,
});
