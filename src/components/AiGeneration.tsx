import { useState } from "react";
import FileUpload from "./FileUpload";
import PromptInput from "./PromptInput";
import StyleDropdown from "./StyleDropdown";

export default function AiGeneration() {
  const [prompt, setPrompt] = useState("");
  const [style, setStyle] = useState("Photorealistic");

  const handleGenerate = () => {
    console.log("Generating with:", { prompt, style });
  };

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-6rem)]">
      <div className="max-w-5xl mx-auto p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            AI Generation with Chat Refinement
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Upload an image, provide a prompt, and refine your creation through
            conversation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FileUpload />

          <div>
            <PromptInput value={prompt} onChange={setPrompt} />
            <StyleDropdown value={style} onChange={setStyle} />
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <button
            onClick={handleGenerate}
            className="rounded-full btn"
            >
            ✨ Generate
          </button>
        </div>
      </div>
    </div>
  );
}
