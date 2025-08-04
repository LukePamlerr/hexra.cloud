import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const ToolDetail = () => {
    const router = useRouter();
    const { tool } = router.query;
    const [toolData, setToolData] = useState(null);

    useEffect(() => {
        if (tool) {
            // Fetch tool data based on the tool name from an API or local data
            const fetchToolData = async () => {
                const response = await fetch(`/api/tools/${tool}`);
                const data = await response.json();
                setToolData(data);
            };

            fetchToolData();
        }
    }, [tool]);

    if (!toolData) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex flex-col items-center justify-center p-4">
            <h1 className="text-4xl font-bold text-orange-500">{toolData.name}</h1>
            <p className="mt-2 text-lg text-white">{toolData.description}</p>
            <a href={toolData.link} className="mt-4">
                <button className="glassmorphism-button">Learn More</button>
            </a>
        </div>
    );
};

export default ToolDetail;