import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="container mt-7 mb-10">
      <ul className="flex items-center justify-between p-4 bg-[#293241]  rounded-md  ">
        <li className="text-white duration-200 font-semibold text-lg">
          <Link href="/">Home</Link>
        </li>
        <div className="flex items-center text-white space-x-4">
          <li className="duration-200 text-lg">
            <Link href="/">Exams List</Link>
          </li>
          <li className="duration-200 text-lg">
            <Link href="/exams/new">Editor Exams</Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
