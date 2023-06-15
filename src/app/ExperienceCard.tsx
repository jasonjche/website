import { Card } from './Card';

type ExperienceCardProps = {
  className?: string;
};

const ExperienceCard = ({ className }: ExperienceCardProps) => {
  return (
    <Card title="Experience" className={`${className} p-4 grid grid-cols-1 gap-4`}>
      <div className="flex flex-row items-right text-center gap-4">
        <img src="/reddit-logo.jpeg" alt="Reddit" className="w-16 h-16 rounded-xl" />
        <p className="">Reddit: Product Management Intern</p>
      </div>
      <div className="flex flex-row items-right text-center">
        <img src="/uva-logo.jpeg" alt="UVA HCI" className="w-16 h-16" />
        <p className="">UVA HCI: VR Researcher</p>
      </div>
      <div className="flex flex-row items-right text-center">
        <img src="/stacker-logo.jpeg" alt="Stacker" className="w-16 h-16" />
        <p className="">Stacker: Product Management Intern</p>
      </div>
      <div className="flex flex-row items-right text-center">
        <img src="/viget-logo.jpeg" alt="Viget" className="w-16 h-16" />
        <p className="">Viget: Product Management Intern</p>
      </div>
      <div className="flex flex-row items-right text-center">
        <img src="/pv-logo.jpeg" alt="Parenthood Ventures" className="w-16 h-16" />
        <p className="">Parenthood Ventures: Venture Intern</p>
      </div>
    </Card>
  );
};

export default ExperienceCard;
