import { Card } from './Card';
import { FaTwitter, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const ContactCard = () => {
    const cardLinkProps = {
        target: '_blank',
        rel: 'noopener noreferrer',
    };

    const cardHoverClasses = 'hover:text-white transition-colors duration-200 block flex justify-center items-center';

    return (
        <div className='grid grid-cols-4 gap-4 text-4xl'>
            <a
                href="https://twitter.com/jasonjche"
                {...cardLinkProps}
                aria-label="Jason's Twitter"
            >
                <Card className={`hover:bg-[#1DA1F2] ${cardHoverClasses}`}>
                    <FaTwitter />
                </Card>
            </a>
            <a
                href="https://github.com/jasonjche"
                {...cardLinkProps}
                aria-label="Jason's Github"
            >
                <Card className={`hover:bg-[#333] ${cardHoverClasses}`}>
                    <FaGithub />
                </Card>
            </a>
            <a
                href="https://www.linkedin.com/in/jasonjche"
                {...cardLinkProps}
                aria-label="Jason's LinkedIn"
            >
                <Card className={`hover:bg-[#0077B5] ${cardHoverClasses}`}>
                    <FaLinkedin />
                </Card>
            </a>
            <a
                href="mailto:jasonjche@virginia.edu"
                {...cardLinkProps}
                aria-label="Email Jason"
            >
                <Card className={`hover:bg-red-500 ${cardHoverClasses}`}>
                    <FaEnvelope />
                </Card>
            </a>
        </div>
    );
};

export default ContactCard;
