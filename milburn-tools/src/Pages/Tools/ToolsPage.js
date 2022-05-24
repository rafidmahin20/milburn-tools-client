import React from 'react';
import useTool from '../Hooks/useTool';
import Tools from './Tools';

const ToolsPage = () => {
    const [tools] = useTool();
    return (
        <div>
             <h1 className='text-center text-4xl font-sans fony-bold text-cyan-700 pb-20 pt-10 uppercase'>Hammers</h1>
             <div className='grid gap-4 grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 pt-10'>
                 {
                     tools.map(tool => <Tools tool = {tool}/>)
                 }
             </div>
        </div>
    );
};

export default ToolsPage;