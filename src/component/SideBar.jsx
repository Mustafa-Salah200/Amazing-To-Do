import { Link } from "react-router-dom";

const SideBar = () => {
  const Active = (e) => {
    const li = document.querySelectorAll("aside a");
    li.forEach((ele) => {
      if (ele.id == e.id) {
        ele.className = " active";
      } else {
        ele.classList.remove("active");
      }
    });
  };
  return (
    <aside>
      <h1 className="title">
        P<span>anDo</span>
      </h1>

      <ul>
        <Link
          to="/"
          id="1"
          className="active"
          onClick={(e) => Active(e.target)}
        >
          <svg
            id="1"
            fill="currentcolor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path
              id="1"
              d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"
            />
          </svg>
          <span id="1">Pipeline</span>
        </Link>
        <Link to="/favorite" id="2" onClick={(e) => Active(e.target)}>
          <svg
            id="2"
            fill="currentcolor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              id="2"
              d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"
            />
          </svg>
          <span id="2">Favorite</span>
        </Link>
      </ul>
    </aside>
  );
};

export default SideBar;
