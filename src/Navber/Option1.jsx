import { Link } from "react-router-dom";

function Option1() {
  return (
    <div className="">
      <ul className="">
        <li className=" md:inline-block md:mx-2 md:mt-2">
          <Link className="">Home</Link>
        </li>
        <li className=" md:inline-block md:mx-2 md:mt-2">
          <Link className="">Blogs</Link>
        </li>
        <li className=" md:inline-block md:mx-2 md:mt-2">
          <Link className="">Projects</Link>
        </li>
        <li className=" md:inline-block md:mx-2 md:mt-2">
          <Link className="">Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default Option1;
