import React, { useState } from "react";
import "./WritingPage.css";
import WpNavBar from "./nav-bar/WpNavBar";
import TextEditor from "./text-editor/TextEditor";

const WritingPage = () => {
  const [zen, setZen] = useState(false);
  const [data, setData] = useState('');
  const [state, setState] = useState(false)

  const setMode = () => {
    setZen(!zen);
    document.getElementsByClassName("WpNavBar")[0].style = {
      backgroundColor: zen ? "black" : "#DEE2FF",
    };
  };

  const [model, setModel] = useState(() => {
    const data = localStorage.getItem("savedHtml");
    return data;
  });

  const body = document.body;
  const html = document.documentElement;
  const height = Math.max(
    body.scrollHeight,
    body.offsetHeight,
    html.clientHeight,
    html.scrollHeight,
    html.offsetHeight
  );


  return (
    <div className="WP">
      <WpNavBar data={data} setMode={setMode} setData={setData} setState={setState} />
      <div

        className="focus"
        style={{
          backgroundColor: zen ? "#25252585" : "#F6F9FE",
          height,
          transition: "all 0.3s ease-in",
        }}
      >
        <TextEditor mode={model} setModel={setModel} data={data} setData={setData} state={state} />
      </div>
    </div>
  );
};

export default WritingPage;