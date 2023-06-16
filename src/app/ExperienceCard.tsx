import { Card } from './Card';

type JobItemProps = {
  logo: string;
  company: string;
  jobDescription: string;
};

const JobItem = ({ logo, company, jobDescription }: JobItemProps) => {
  return (
    <div className="flex flex-row items-center gap-4 py-2">
      <img src={logo} alt={company} className="w-16 h-16 rounded-xl" />
      <div className="flex flex-col">
        <p className='font-semibold'>{company}</p>
        <p>{jobDescription}</p>
      </div>
    </div>
  );
};

type ExperienceCardProps = {
  className?: string;
};

const ExperienceCard = ({ className }: ExperienceCardProps) => {
  const jobs = [
    { logo: "images/reddit-logo.jpeg", company: "Reddit", jobDescription: "Product Management Intern" },
    { logo: "images/uva-logo.jpeg", company: "UVA HCI Lab", jobDescription: "AR/VR Researcher" },
    { logo: "images/stacker-logo.jpeg", company: "Stacker", jobDescription: "Product Management Intern" },
    { logo: "images/viget-logo.jpeg", company: "Viget", jobDescription: "Product Management Intern" },
    { logo: "images/pv-logo.jpeg", company: "Parenthood Ventures", jobDescription: "Venture Intern" },
  ];

  return (
    <Card title="Experience" className={`${className} p-4 grid grid-cols-1 divide-y divide-gray-200`}>
      {jobs.map((job, index) => <JobItem key={index} logo={job.logo} company={job.company} jobDescription={job.jobDescription} />)}
    </Card>
  );
};

export default ExperienceCard;
