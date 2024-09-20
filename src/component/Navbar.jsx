/* eslint-disable react/prop-types */
function Navbar({ Check }) {
  return (
    <div className="navbar">
      <h1 className="title">Pipeline</h1>
      <button onClick={Check}>Create Task</button>
    </div>
  );
}

export default Navbar;
