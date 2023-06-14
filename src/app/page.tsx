import { Card } from './Card';
import ResumeCard from './ResumeCard';
import ContactCard from './ContactCard';
import ExperienceCard from './ExperienceCard';
import NameCard from './NameCard';
import BioCard from './BioCard';

export default function Home() {
  return (
    <div className='grid grid-cols-3 gap-4 py-4 px-28'>
      <NameCard />
      <BioCard />
      <div className='flex flex-col gap-4'>
        <ContactCard />
        <ResumeCard />
      </div>

      <ExperienceCard className='row-start-2 col-start-1 row-span-3 col-span-1'/>

      <Card title="Education" className="row-start-2 col-start-2 p-4">
        <img src="/uva.png" alt="UVA" width={100} height={100} />
        <p>University of Virginia | Computer Science & Commerce</p>
      </Card>

      <Card title="Text-Savvy" className="row-start-2 col-start-3 p-4">
        {/* Add content here */}
      </Card>

      <Card title="Totem" className="row-start-3 col-start-2 p-4">
        {/* Add content here */}
      </Card>

      <Card title="VEO" className="row-start-3 col-start-3 p-4">
        {/* Add content here */}
      </Card>
    </div>
  );
}
