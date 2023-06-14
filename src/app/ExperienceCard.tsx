import { Card } from './Card';

type ExperienceCardProps = {
    className?: string;
};

const ExperienceCard = ({className} : ExperienceCardProps) => {
    return (
        <Card title="Experience" className={`${className}`}>
             <ul className="space-y-4">
            <li>Reddit: Product Management Intern
              <ul className="list-disc list-inside space-y-2">
                <li>Mobile App Retargeting</li>
                <li>Keyword Targeting Intelligence</li>
              </ul>
            </li>
            <li>Stacker: Product Management Intern
              <ul className="list-disc list-inside space-y-2">
                <li>Stacker Story Hub</li>
                <li>Internal Analytics</li>
              </ul>
            </li>
            <li>Viget: Product Management Intern
              <ul className="list-disc list-inside space-y-2">
                <li>SpectrumAI Twyll</li>
                <li>Joust Intern Project</li>
              </ul>
            </li>
            <li>Parenthood Ventures: Venture Intern
              <ul className="list-disc list-inside space-y-2">
                <li>Airtable Backend</li>
                <li>Automated Mailing List</li>
              </ul>
            </li>
          </ul>
        </Card>
    );
};

export default ExperienceCard;
