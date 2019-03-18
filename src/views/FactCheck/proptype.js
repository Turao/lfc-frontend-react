import PropTypes from 'prop-types';

import UserPropType from '../User/proptype';
import StatementPropType from '../Statement/proptype';

export default PropTypes.shape({
  id: PropTypes.number.isRequired,
  comment: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  veracity: PropTypes.oneOf(['true', 'false', 'partial']).isRequired,
  verifiedByModerator: PropTypes.bool.isRequired,
  checker: UserPropType,
  statement: StatementPropType,
  moderator: UserPropType,
});
