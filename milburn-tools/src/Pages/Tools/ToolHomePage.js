import React from "react";
import useTool from "../Hooks/useTool";
import Tools from "./Tools";

const ToolHomePage = () => {
    const [tools] = useTool();
  return (
    <div>
      <h1 className="text-center text-4xl font-sans font-bold text-cyan-700 pt-10 pb-10">
        Tools
      </h1>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 pt-10 pb-10">
            {
                tools.slice(0, 6).map((tool, index) =>(
                    <Tools key={index} tool = {tool}/>
                ))
            }
      </div>
    </div>
  );
};

export default ToolHomePage;
