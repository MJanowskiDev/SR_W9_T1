import withUser from 'components/HOC/withUser';

const Movies = ({ userInfo }) => {
  return (
    <div>
      <h1>Movies component</h1>
      <p>User email: {userInfo.email}</p>
    </div>
  );
};

export default withUser(Movies);
