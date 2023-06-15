import { Card } from './Card';

type BioCardProps = {
  className?: string;
};

const bio = `Product manager, engineer, passionate about all things startups and tech. `;

const BioCard = ({ className }: BioCardProps) => {
  return (
    <Card className={`flex items-center ${className}`}>
      <p className="text-xl text-gray-500"> {bio} </p>
      <img
        src="/profile.png"
        alt="profile"
        className="rounded-full w-24 h-24 ml-4"
      />
    </Card>
  );
};

export default BioCard;
