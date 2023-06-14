'use client';

import { Card } from './Card';

const ResumeCard = () => {
    const openProduct = () => {
        window.open("https://www.dropbox.com/s/za6ptynh53kt8bc/Jason%20He%20Resume%20-%20Product.pdf?dl=0", "_blank", "noopener,noreferrer")
    };
    const openSoftware = () => {
        window.open("https://chat.openai.com", "_blank", "noopener,noreferrer")
    };

    return (
        <Card className="flex gap-4">
            <button
                onClick={openProduct}
                aria-label="Jason's PM Resume"
                className="bg-[#878782] w-1/2 text-white px-4 py-2 rounded-xl text-center hover:bg-[#979792] transition-colors duration-200 block"
            >
                Product Resume
            </button>
            <button
                onClick={openSoftware}
                aria-label="Jason's SWE Resume"
                className="bg-[#fff] text-black w-1/2 px-4 py-2 rounded-xl text-center hover:bg-[#eee] transition-colors duration-200 block"
            >
                SWE Resume
            </button>
        </Card>
    );
};

export default ResumeCard;
