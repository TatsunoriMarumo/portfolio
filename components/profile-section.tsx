"use client";

import { useLanguage } from "@/contexts/language-context";
import Image from "next/image";
import { Github, Linkedin, Mail } from "lucide-react";
import { TranslationKeyEnum } from "@/types/translations";
const { name, jobTitle, bio } = TranslationKeyEnum;

export default function ProfileSection() {
  const { translate } = useLanguage();

  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12 py-8 border-b border-sage-green/50">
      <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-soft-blue shadow-xl">
        <Image
          src="/images/profile/me.jpg"
          alt="Profile Image"
          fill
          className="object-cover"
        />
      </div>
      <div className="flex-1 text-center md:text-left">
        <h2 className="text-3xl font-bold mb-2 text-dark-navy">
          {translate(name)}
        </h2>
        <p className="text-xl text-dark-teal mb-4 font-medium">
          {translate(jobTitle)}
        </p>
        <p className="mb-6 max-w-2xl text-dark-navy/80 leading-relaxed">
          {translate(bio)}
        </p>
        <div className="flex justify-center md:justify-start space-x-4">
          <a
            href="https://github.com/TatsunoriMarumo"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-dark-navy text-light-gray hover:bg-dark-teal transition-colors duration-300 shadow-lg"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/tatsunori-marumo-07241b2aa"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-dark-navy text-light-gray hover:bg-dark-teal transition-colors duration-300 shadow-lg"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:t.maru0910@gmail.com"
            className="p-3 rounded-full bg-dark-navy text-light-gray hover:bg-dark-teal transition-colors duration-300 shadow-lg"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </div>
  );
}
