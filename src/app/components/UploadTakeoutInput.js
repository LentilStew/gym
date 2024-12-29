import React, { useRef, useState } from "react";
import { FILELIMIT } from "./generalComponents.js"

function FilesUploaded({ files }) {
  const renderFileTree = (files, indentLevel = 0) => {
    return files.map((file, index) => {
      const isDirectory = file.type === "directory";
      return (
        <div key={index}>
          {isDirectory && indentLevel !== 0 ? Array(indentLevel + 1).fill("│\u00A0\u00A0\u00A0").join("") : ""}
          <div
            key={index}
            className={isDirectory ? "tree-directory" : "tree-file"}
          >
            {Array(indentLevel).fill("│\u00A0\u00A0\u00A0").join("")}

            {index === 0 ? "┌" : index === files.length - 1 ? "└" : "├"}

            {"── " + file.name}

            {isDirectory ? renderFileTree(file.children, indentLevel + 1) : ""}
          </div>
        </div>
      );
    });
  };

  return <div className="unselectable file-tree ">{renderFileTree(files)}</div>;
}

function convertFilesToObject(files) {
  const fileTree = [];

  for (const file of files) {
    const pathParts = file.webkitRelativePath.split("/");
    let currentLevel = fileTree;

    for (let i = 0; i < pathParts.length; i++) {
      const isFile = i === pathParts.length - 1;
      const name = isFile ? pathParts[i] : pathParts[i] + "/";

      const existingItem = currentLevel.find((item) => item.name === name);

      if (existingItem) {
        if (isFile) {
          existingItem.type = "file";
        } else {
          currentLevel = existingItem.children;
        }
      } else {
        const newItem = {
          name,
          type: isFile ? "file" : "directory",
          children: isFile ? undefined : [],
        };

        currentLevel.push(newItem);

        if (!isFile) {
          currentLevel = newItem.children;
        }
      }
    }
  }

  return fileTree;
}

const UploadTakeout = ({ onFileChange }) => {
  const inputRef = useRef(null);

  const handleFileChange = () => {
    if (inputRef.current.files.length !== 1) {
      return
    }
    const file = inputRef.current.files[0];

    if (typeof onFileChange === "function") {
      onFileChange(file);
    }
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "row" }}
      className="unselectable"
    >
      <div className="inputContainter">
        <span className="subtitle">files</span>
        <span className="sub-text">
          select takeout files{" "}
          <a
            style={{ color: "orange" }}
            href="https://www.example.com/help"
            target="_blank"
          >
            Help
          </a>
        </span>

        <label htmlFor="takeout-upload" className="button takeout">
          Upload
        </label>
        <input
          ref={inputRef}
          id="takeout-upload"
          type="file"
          onChange={handleFileChange}
        />
      </div>
    </div>
  );
};

export default UploadTakeout;
