import { Link } from "react-router-dom";


const About = () => {
  return (
  <div>
  <nav className="bg-blue-500 w-full">
<ul className="flex flex-row items-center justify-end h-16 gap-20 mr-12 font-bold ">
    <li>
        <Link to="/">Home</Link>
    </li>
    <li>
        <Link to="/about">About</Link>
    </li>
    <li>Contact</li>
</ul>
</nav>
</div>
  )
};

export default About;