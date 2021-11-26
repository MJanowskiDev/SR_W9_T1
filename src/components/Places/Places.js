import withUser from 'components/HOC/withUser';

const Places = ({ userInfo }) => {
  return (
    <div>
      <h1>Places component</h1>
      <p>User is admin:{userInfo.isAdmin ? 'Yes' : 'No'}</p>
    </div>
  );
};

export default withUser(Places);
