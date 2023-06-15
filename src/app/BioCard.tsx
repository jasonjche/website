import { Card } from './Card';

type BioCardProps = {
  className?: string;
};

const BioCard = ({ className }: BioCardProps) => {
  return (
    <Card className={`flex items-center ${className}`}>
      <p className="text-xl text-gray-500">I'm a product manager, software engineer, and an aspiring entrepreneur based out of DC, and currently in SF. Currently a product manager at
        <a href="www.reddit.com" className="hover:text-red-500"> Reddit.</a></p>
    </Card>
  );
};

export default BioCard;
