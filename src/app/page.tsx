import { Card } from './Card';
import ResumeCard from './ResumeCard';
import ContactCard from './ContactCard';
import ExperienceCard from './ExperienceCard';
import NameCard from './NameCard';
import BioCard from './BioCard';

export default function Home() {
  return (
    <div className='flex flex-col gap-4 py-[5%] px-[10%] lg:grid lg:grid-cols-4'>

      <Card
        title="📍 San Francisco"
        className="bg-sf bg-cover bg-top text-white text-center"
      >
      </Card>
      <BioCard />
      <div className='grid grid-rows-2 lg:col-span-2 gap-4'>
        <ContactCard />
        <ResumeCard />
      </div>

      <ExperienceCard className='row-span-2' />

      <NameCard className='col-span-2' />

      <Card
        title=""
        className="bg-gradient-to-b from-blue-600 to-blue-400 text-white"
      >
        <div className="px-6 py-8">
          <img
            src="/UVA-Symbol.png"
            alt="UVA"
            className="mx-auto mb-4 w-24 h-24"
          />
          <p className="text-xl font-semibold text-center mb-2">
            University of Virginia
          </p>
          <p className="text-lg text-center">Computer Science & Commerce</p>
        </div>
      </Card>

      <a href="https://github.com/jasonjche/text-savvy" target="_blank" rel="noopener noreferrer">
        <Card title="Text-Savvy (WIP)" className="">
          <p>Become a better texter!</p>
        </Card>
      </a>

      <Card title="Totem" className="">
        <p>Never lose your friends at a festival again!</p>
      </Card>

      <a href="https://github.com/jasonjche/recipez" target="_blank" rel="noopener noreferrer">
        <Card title="recipez" className="">
          <p>Don't think about your grocery list</p>
        </Card>
      </a>
    </div>
  );
}
