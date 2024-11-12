import PropTypes from "prop-types";

interface Props {
  name: string;
  last: string;
}

const getFullName = (firstName: string, lastName: string) => {
  return `${firstName} ${lastName}`;
};
export const Profile = ({ name, last }: Props) => {
  return <p>{getFullName(name, last)}</p>;
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  last: PropTypes.string.isRequired,
};
