import React from 'react';
import ToolCard from '../../components/ToolCard';

const tools = [
    { id: 1, name: 'Tool 1', description: 'Description for Tool 1', link: '/tools/tool-1' },
    { id: 2, name: 'Tool 2', description: 'Description for Tool 2', link: '/tools/tool-2' },
    { id: 3, name: 'Tool 3', description: 'Description for Tool 3', link: '/tools/tool-3' },
    { id: 4, name: 'Tool 4', description: 'Description for Tool 4', link: '/tools/tool-4' },
    { id: 5, name: 'Tool 5', description: 'Description for Tool 5', link: '/tools/tool-5' },
    { id: 6, name: 'Tool 6', description: 'Description for Tool 6', link: '/tools/tool-6' },
    { id: 7, name: 'Tool 7', description: 'Description for Tool 7', link: '/tools/tool-7' },
    { id: 8, name: 'Tool 8', description: 'Description for Tool 8', link: '/tools/tool-8' },
    { id: 9, name: 'Tool 9', description: 'Description for Tool 9', link: '/tools/tool-9' },
    { id: 10, name: 'Tool 10', description: 'Description for Tool 10', link: '/tools/tool-10' },
    { id: 11, name: 'Tool 11', description: 'Description for Tool 11', link: '/tools/tool-11' },
    { id: 12, name: 'Tool 12', description: 'Description for Tool 12', link: '/tools/tool-12' },
    { id: 13, name: 'Tool 13', description: 'Description for Tool 13', link: '/tools/tool-13' },
    { id: 14, name: 'Tool 14', description: 'Description for Tool 14', link: '/tools/tool-14' },
    { id: 15, name: 'Tool 15', description: 'Description for Tool 15', link: '/tools/tool-15' },
    { id: 16, name: 'Tool 16', description: 'Description for Tool 16', link: '/tools/tool-16' },
    { id: 17, name: 'Tool 17', description: 'Description for Tool 17', link: '/tools/tool-17' },
    { id: 18, name: 'Tool 18', description: 'Description for Tool 18', link: '/tools/tool-18' },
    { id: 19, name: 'Tool 19', description: 'Description for Tool 19', link: '/tools/tool-19' },
    { id: 20, name: 'Tool 20', description: 'Description for Tool 20', link: '/tools/tool-20' },
    { id: 21, name: 'Tool 21', description: 'Description for Tool 21', link: '/tools/tool-21' },
    { id: 22, name: 'Tool 22', description: 'Description for Tool 22', link: '/tools/tool-22' },
    { id: 23, name: 'Tool 23', description: 'Description for Tool 23', link: '/tools/tool-23' },
    { id: 24, name: 'Tool 24', description: 'Description for Tool 24', link: '/tools/tool-24' },
    { id: 25, name: 'Tool 25', description: 'Description for Tool 25', link: '/tools/tool-25' },
    { id: 26, name: 'Tool 26', description: 'Description for Tool 26', link: '/tools/tool-26' },
    { id: 27, name: 'Tool 27', description: 'Description for Tool 27', link: '/tools/tool-27' },
    { id: 28, name: 'Tool 28', description: 'Description for Tool 28', link: '/tools/tool-28' },
    { id: 29, name: 'Tool 29', description: 'Description for Tool 29', link: '/tools/tool-29' },
    { id: 30, name: 'Tool 30', description: 'Description for Tool 30', link: '/tools/tool-30' },
];

const ToolsPage = () => {
    return (
        <div className="flex flex-col items-center justify-center p-4">
            <h1 className="text-4xl font-bold text-orange-500 mb-6">Available Tools</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {tools.map(tool => (
                    <ToolCard key={tool.id} tool={tool} />
                ))}
            </div>
        </div>
    );
};

export default ToolsPage;