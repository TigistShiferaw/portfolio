import React from 'react';

const Technologies = () => {
  return (
    <div className="mt-12 padding-x padding-y max-w-screen-md mx-auto text-center" id="discover">
      <div className="home__text-container">
        <h1 className="text-4xl font-extrabold" style={{ color: "#42446E" }}>My Technologies</h1>
        <p className="text-gray-500">Technologies I’ve been working with recently</p>
      </div>
      <div className="grid grid-cols-6 gap-4 mt-8">
        <div>
          <img src='/node 1.png' alt="Node.js Logo" className="mx-auto" style={{ width: "100px", height: "100px" }} />
        </div>
        <div>
          <img src='/postgress 1.png' alt="PostgreSQL Logo" className="mx-auto" style={{ width: "100px", height: "100px" }} />
        </div>
        <div>
          <img src='/vscode-icons_file-type-js-official.png' alt="JavaScript Logo" className="mx-auto" style={{ width: "100px", height: "100px" }} />
        </div>
        <div>
          <img src='/logos_react.png' alt="React.js Logo" className="mx-auto" style={{ width: "100px", height: "100px" }} />
        </div>
        <div>
          <img src='/Vector.png' alt="Python Logo" className="mx-auto" style={{ width: "100px", height: "100px" }} />
        </div>
        <div>
          <img src='/postman 1.png' alt="Postman Logo" className="mx-auto" style={{ width: "100px", height: "100px" }} />
        </div>
        <div>
          <img src='/Mongodb-PNG-Image-HD 1.png' alt="MongoDB Logo" className="mx-auto" style={{ width: "100px", height: "100px" }} />
        </div>
        <div>
          <img src='/vscode-icons_file-type-vscode.png' alt="VS Code Logo" className="mx-auto" style={{ width: "100px", height: "100px" }} />
        </div>
        <div>
          <img src='/overleaf 1.png' alt="Overleaf Logo" className="mx-auto" style={{ width: "100px", height: "100px" }} />
        </div>
        
        <div>
          <img src='/github.png' alt="GitHub Logo" className="mx-auto" style={{ width: "100px", height: "100px" }} />
        </div>
        <div>
          <img src='/tensorflow 1.png' alt="TensorFlow Logo" className="mx-auto" style={{ width: "100px", height: "100px" }} />
        </div>
        <div>
          <img src='/cib_greensock.png' alt="GreenSock Logo" className="mx-auto" style={{ width: "100px", height: "100px" }} />
        </div>
        <div>
          <img src="/java 1.png" alt="Java Logo" className="mx-auto" style={{ width: "100px", height: "100px" }} />
        </div>
        {/* Add other images here with fixed width and height */}
      </div>
    </div>
  );
};

export default Technologies;
