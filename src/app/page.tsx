import { Card } from './Card';
import ResumeCard from './ResumeCard';
import ContactCard from './ContactCard';
import ExperienceCard from './ExperienceCard';
import NameCard from './NameCard';
import BioCard from './BioCard';

export default function Home() {
  return (
    <div className='grid grid-cols-4 gap-4 py-4 px-52'>

      <Card
        title="📍 San Francisco"
        className="bg-sf bg-cover bg-top text-white text-center"
      >
      </Card>
      <BioCard />
      <div className='grid grid-rows-2 col-span-2 gap-4'>
        <ContactCard />
        <ResumeCard />
      </div>

      <ExperienceCard className='row-start-2 col-start-1 row-span-3' />

      <NameCard className='col-span-2' />

      <Card title="Text-Savvy" className="">
        {/* Add content here */}
      </Card>

      <Card title="Totem" className="">
        {/* Add content here */}
      </Card>

      <Card title="VEO" className="">
        {/* Add content here */}
      </Card>


      <Card title="" className="">
        <img src="/uva.png" alt="UVA" width={100} height={100} />
        <p className=''>Computer Science & Commerce</p>
      </Card>

    </div>
  );
}
