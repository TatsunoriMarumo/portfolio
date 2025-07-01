"use client";

import Image from "next/image";

interface TechIconProps {
  tech: string;
  size?: number;
  className?: string;
}

// 技術名とアイコンファイル名のマッピング
const techIconMap: Record<string, string> = {
  Android: "Android.svg",
  Bootstrap: "Bootstrap.svg",
  C: "C.svg",
  HTML5: "HTML5.svg",
  CSS3: "CSS3.svg",  
  Kotlin: "Kotlin.svg",
  Swift: "Swift.svg",
  Python: "Python.svg",
  PyTorch: "PyTorch.svg",
  TensorFlow: "TensorFlow.svg",
  "scikit-learn": "scikit-learn.svg",
  FastAPI: "FastAPI.svg",
  MongoDB: "MongoDB.svg",
  React: "React.svg",
  Java: "Java.svg",
  TypeScript: "TypeScript.svg",
  "Tailwind CSS": "Tailwind CSS.svg",
  JavaScript: "JavaScript.svg", 
  "Node.js": "Node.js.svg", 
  MySQL: "MySQL.svg", 
  PostgreSQL: "PostgresSQL.svg",
  Firebase: "Firebase.svg", 
  "Next.js": "Next.js.svg", 
};

export default function TechIcon({
  tech,
  size = 16,
  className = "",
}: TechIconProps) {
  const iconFile = techIconMap[tech];

  if (!iconFile) {
    return null;
  }

  return (
    <Image
      src={`/icons/${iconFile}`}
      alt={`${tech} icon`}
      width={size}
      height={size}
      className={`inline-block ${className}`}
      onError={(e) => {
        // アイコンが見つからない場合は非表示にする
        e.currentTarget.style.display = "none";
      }}
    />
  );
}
