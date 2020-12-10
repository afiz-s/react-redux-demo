import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../redux";

function UsersComponent({ usersData, fetchUsers }) {
  useEffect(() => {
    fetchUsers();
  }, []);
  return usersData.loading ? (
    <h1>loading</h1>
  ) : usersData.error ? (
    <h2>usersData.error</h2>
  ) : (
    <div>
      <h2>Users List</h2>
      {usersData &&
        usersData.users &&
        usersData.users.map((user) => <p>{user.name}</p>)}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    usersData: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersComponent);
