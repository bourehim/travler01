"use client";

import React, { useRef, useEffect } from "react";
import { useEditor } from "@/context/EditorContext";

interface EditableTextProps {
  path: string;
  defaultText: string;
  as?: React.ElementType;
  className?: string;
  multiline?: boolean;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export default function EditableText({
  path,
  defaultText,
  as: Component = "span",
  className = "",
  multiline = false,
  style,
}: EditableTextProps) {
  const { isEditing, getValue, updateField } = useEditor();
  const ref = useRef<HTMLElement>(null);
  const currentText = getValue(path, defaultText);

  // Sync ref text with currentText when not actively focused
  useEffect(() => {
    if (ref.current && document.activeElement !== ref.current) {
      ref.current.innerText = currentText;
    }
  }, [currentText]);

  const handleInput = (e: React.FormEvent<HTMLElement>) => {
    const newText = e.currentTarget.innerText;
    updateField(path, newText);
  };

  const handleBlur = (e: React.FocusEvent<HTMLElement>) => {
    const newText = e.currentTarget.innerText.trim();
    if (newText !== currentText) {
      updateField(path, newText);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (!multiline && e.key === "Enter") {
      e.preventDefault();
      e.currentTarget.blur();
    }
  };

  if (!isEditing) {
    return (
      <Component className={className} style={style}>
        {currentText}
      </Component>
    );
  }

  return (
    <Component
      ref={ref}
      contentEditable
      suppressContentEditableWarning
      onInput={handleInput}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
      title={`Click to edit (${path})`}
      className={`${className} cursor-text transition-all duration-150 rounded px-1 py-0.5 outline-dashed outline-1 outline-[#C27A4E]/40 hover:outline-[#C27A4E] hover:bg-[#C27A4E]/10 focus:outline-2 focus:outline-[#C27A4E] focus:bg-[#FAF4EA] focus:shadow-sm`}
      style={{
        minWidth: "1ch",
        display: Component === "span" ? "inline-block" : undefined,
        ...style,
      }}
    >
      {currentText}
    </Component>
  );
}
