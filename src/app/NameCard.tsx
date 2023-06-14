import { Card } from './Card';

type NameCardProps = {
    className?: string;
};

const NameCard = ({className}: NameCardProps) => {
    return (
        <Card className={`flex items-center text-center ${className}`}>
        <h1 className="animate-text font-extrabold text-transparent text-7xl bg-clip-text bg-gradient-to-r from-[#4568dc] to-[#ff5f6d] text-center w-full">Jason He</h1>
      </Card>
    );
};

export default NameCard;
