import { Card } from './Card';
import { FaTwitter, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const ContactCard = () => {
    return (
        <Card className="">
            <div className="p-6 flex flex-row justify-between items-center text-4xl">
                <a href="https://twitter.com/jasonjche" target="_blank" rel="noopener noreferrer" aria-label="Jason's Twitter" className="hover:text-[#1DA1F2] transition-colors duration-200 block"><FaTwitter /></a>
                <a href="https://github.com/jasonjche" target="_blank" rel="noopener noreferrer" aria-label="Jason's Github" className="hover:text-purple-500 transition-colors duration-200 block"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/jasonjche" target="_blank" rel="noopener noreferrer" aria-label="Jason's LinkedIn" className="hover:text-[#0077B5] transition-colors duration-200 block"><FaLinkedin /></a>
                <a href="mailto:jasonjche@virginia.edu" target="_blank" rel="noopener noreferrer" aria-label="Email Jason" className="hover:text-red-600 transition-colors duration-200 block"><FaEnvelope /></a>
            </div>
        </Card>
    );
};

export default ContactCard;
