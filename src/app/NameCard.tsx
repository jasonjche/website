import { Card } from './Card';

type NameCardProps = {
    className?: string;
};

const NameCard = ({className}: NameCardProps) => {
    return (
        <Card className={`flex items-center text-center bg-gradient-to-r from-[#4568dc] to-[#ff5f6d] ${className}`}>
        <h1 className="font-bold text-white text-7xl  text-center w-full">Jason He</h1>
      </Card>
    );
};

export default NameCard;
