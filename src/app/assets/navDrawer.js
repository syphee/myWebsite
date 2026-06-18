"use client";
import Header from "../assets/header";

import "../assets/home.css";

import { useState, useEffect } from "react";

export default function NavDrawer({
  miniTitle,
  title,
  pretext,
  typingContent,
  visible = "true",
  isLooping = true
}) {
  const words = typingContent ? typingContent : [];

  const typingSpeed = 80;
  const deletingSpeed = 50;
  const pauseAfterType = 1200;

  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    setText("");
    setWordIndex(0);
    setIsDeleting(false);
  }, [typingContent]);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout;

    if (currentWord) {
      if (!isDeleting) {
        timeout = setTimeout(() => {
          setText(currentWord.slice(0, text.length + 1));

          if (text.length + 1 === currentWord.length && isLooping) {
            setTimeout(() => setIsDeleting(true), pauseAfterType);
          }
        }, typingSpeed);
      } else  {
        timeout = setTimeout(() => {
          setText(currentWord.slice(0, text.length - 1));

          if (text.length === 1) {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
          }
        }, deletingSpeed);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex]);

  return (
    <section className="flex w-screen px-4">
      {" "}
      {/* Added padding for mobile edges */}
      <div className="m-auto max-w-full">
        {" "}
        {/* Ensures container doesn't overflow */}
        <div className="mt-10 md:text-left">
          <span>{miniTitle}</span>
          <h1 className="mt-0 text-4xl md:text-7xl break-words">
            {" "}
            {/* Responsive font size + wrapping */}
            {title}
          </h1>
          <h2 className="font-mono text-xl md:text-4xl leading-tight">
            {pretext}
            <span className="bg-gradient-to-r from-indigo-400 to-pink-500 bg-clip-text text-transparent">
              {text}
            </span>
            <span className="ml-1 animate-blink">|</span>
          </h2>
          <div className="flex flex-wrap">
            {" "}
            {/* Ensure flex-wrap is enabled */}
            <Header visible={visible} />
            <span className="mt-0 text-sm text-slate md:text-7xl break-words ">
            {" "}
            {/* Responsive font size + wrapping */}
           
          </span>
          </div>
        </div>
      </div>
    </section>
  );
}
