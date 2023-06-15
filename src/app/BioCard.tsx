import { Card } from './Card';

type BioCardProps = {
  className?: string;
};

const bio = `Product manager, engineer, passionate about startups and tech. `;

const BioCard = ({ className }: BioCardProps) => {
  return (
    <Card className={`flex items-center ${className}`}>
      <p className="text-xl text-gray-500"> {bio} </p>
    </Card>
  );
};

export default BioCard;
