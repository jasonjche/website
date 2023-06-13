import { Card } from './Card'; // Adjust the path according to your project structure
import { FaTwitter, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Home() {
  return (
    <div className="grid grid-cols-3 gap-4 p-8 rounded-lg bg-white mx-auto max-w-screen-xl">

      <Card className="row-span-2">
          <h1 className="font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-center">Jason He</h1>
      </Card>

      <Card className="row-span-2">
        <p className="text-xl text-gray-500">I'm a product manager and developer based in San Francisco. I'm currently a product manager at Reddit.</p>
      </Card>

      <Card className="row-span-1">
        <div className="p-6 flex flex-row justify-between content-center text-4xl">
          <a href="https://twitter.com/jasonjche" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500 block"><FaTwitter /></a>
          <a href="https://github.com/jasonjche" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500 block"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/jasonjche" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500  block"><FaLinkedin /></a>
          <a href="mailto:jasonjche@virginia.edu" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500  block"><FaEnvelope /></a>
        </div>
      </Card>

      <Card className="row-span-1">
        <a href="https://www.dropbox.com/s/za6ptynh53kt8bc/Jason%20He%20Resume%20-%20Product.pdf?dl=0">Here is my resume</a>
      </Card>

      <Card title="Experience" className="col-span-2 row-span-2">
        <ul>
          <li>Reddit</li>
          <li>Stacker</li>
          <li>Viget</li>
          <li>Parenthood Ventures</li>
        </ul>
      </Card>

      <Card title="Education" className="col-span-2 row-span-2">
      </Card>

      <Card title="Text-Savvy" className="col-span-2 row-span-2">
      </Card>

      <Card title="Totem" className="col-span-2 row-span-2">
      </Card>

      <Card title="VEO" className="col-span-2 row-span-2">
      </Card>
    </div>
  );
}
