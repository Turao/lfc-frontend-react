import PropTypes from 'prop-types';

import OrganizationPropType from '../Organization/proptype';
import UserPropType from '../User/proptype';
import StatementPropType from '../Statement/proptype';

export default PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  organization: OrganizationPropType,
  moderators: PropTypes.arrayOf(UserPropType),
  statements: PropTypes.arrayOf(StatementPropType),
});
