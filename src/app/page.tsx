import { Card } from './Card'; // Adjust the path according to your project structure
import { FaTwitter, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Home() {
  return (
    <div className='flex flex-col gap-4 p-8'>
      <div className="flex flex-row justify-between bg-white mb-4 gap-4">

        <Card className="flex-1 mx-2">
          <h1 className="font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-center">Jason He</h1>
        </Card>

        <Card className="flex-1 mx-2 grow-0">
          <p className="text-xl text-gray-500">I'm a product manager and developer based in San Francisco. I'm currently a product management intern at Reddit.</p>
        </Card>

        <div className='flex-1 mx-2 flex flex-col gap-4'>
          <Card className="h-1/2 p-4">
            <div className="p-6 flex flex-row justify-between content-center text-4xl">
              <a href="https://twitter.com/jasonjche" target="_blank" rel="noopener noreferrer" aria-label="Jason's Twitter" className="hover:text-gray-500 transition-colors duration-200 block"><FaTwitter /></a>
              <a href="https://github.com/jasonjche" target="_blank" rel="noopener noreferrer" aria-label="Jason's Github" className="hover:text-gray-500 transition-colors duration-200 block"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/jasonjche" target="_blank" rel="noopener noreferrer" aria-label="Jason's LinkedIn" className="hover:text-gray-500 transition-colors duration-200 block"><FaLinkedin /></a>
              <a href="mailto:jasonjche@virginia.edu" target="_blank" rel="noopener noreferrer" aria-label="Email Jason" className="hover:text-gray-500 transition-colors duration-200 block"><FaEnvelope /></a>
            </div>
          </Card>
          <Card className="h-1/2 h-12 p-4">
            <a href="https://www.dropbox.com/s/za6ptynh53kt8bc/Jason%20He%20Resume%20-%20Product.pdf?dl=0" target="_blank" rel="noopener noreferrer" aria-label="Jason's Resume" className="hover:text-gray-500 transition-colors duration-200 block">Resume</a>
          </Card>
        </div>
      </div>

      <div className="flex bg-white mb-4 gap-4">
        <Card title="Experience" className="w-1/3 h-12 p-4">
          <ul className="space-y-4">
            <li>Reddit: Product Management Intern
              <ul className="list-disc list-inside space-y-2">
                <li>Mobile App Retargeting</li>
                <li>Keyword Targeting Intelligence</li>
              </ul>
            </li>
            <li>Stacker: Product Management Intern
              <ul className="list-disc list-inside space-y-2">
                <li>Stacker Story Hub</li>
                <li>Internal Analytics</li>
              </ul>
            </li>
            <li>Viget: Product Management Intern
              <ul className="list-disc list-inside space-y-2">
                <li>SpectrumAI Twyll</li>
                <li>Joust Intern Project</li>
              </ul>
            </li>
            <li>Parenthood Ventures: Venture Intern
              <ul className="list-disc list-inside space-y-2">
                <li>Airtable Backend</li>
                <li>Automated Mailing List</li>
              </ul>
            </li>
          </ul>
        </Card>

        <Card title="Education" className="w-1/3 h-12 p-4">
          <img src="/uva.png" alt="UVA" width={100} height={100} />
          <p>University of Virginia | Computer Science & Commerce</p>
        </Card>

        <Card title="Text-Savvy" className="w-1/3 h-12 p-4">
          {/* Add content here */}
        </Card>
        </div>


        <Card title="Totem" className="w-1/3 h-12 p-4">
          {/* Add content here */}
        </Card>

        <Card title="VEO" className="	w-1/3 h-12 p-4">
          {/* Add content here */}
        </Card>
    </div>
  );
}
