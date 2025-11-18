"use client";

import HeroCard from "./Card/HeroCard";
import LanguageCard from "./Card/LanguageCard";
import LearningCard from "./Card/LearningCard";
import ProjectCard from "./Card/ProjectCard";
import TechCard from "./Card/TechCard";
import GithubCard from "./Card/GithubCard";
import WhatsappCard from "./Card/WhatsappCard";
import AllProjectsCard from "./Card/AllProjectsCard"
import LinkedinCard from "./Card/LinkedinCard";
import SoftSkillsCard from "./Card/SoftSkillsCard"
import TwoProjectCard from "./Card/TwoProjectCard"
import AboutMeCard from "./Card/AboutMeCard"
import CardTiltWrapper from "@/components/CardTiltWrapper";


export default function Grid() {
  return (
    <CardTiltWrapper>
      <div className="grid grid-cols-12 grid-rows-8 gap-4 cursor-default">
        {/* === Fila 1 === */}
        <HeroCard />
        <LanguageCard />
        <LearningCard />

        {/* === Fila 2 === */}
        <ProjectCard />
        <TechCard />
        <GithubCard />

        {/* === Fila 3 === */}
        <WhatsappCard />
        <AllProjectsCard />
        <LinkedinCard />

        {/* === Fila 4 === */}
        <TwoProjectCard />
        <SoftSkillsCard />
        <AboutMeCard />
      </div>
    </CardTiltWrapper>
  );
}

{/*
<div className="grid grid-cols-12 grid-rows-10 gap-4">
  {/* Tarjeta principal 
  <div className="h-96 col-span-8 row-span-2 p-4 gap-1 bg-[url('/images/Main.JPG')] bg-cover text-white flex flex-col  rounded-2xl shadow-[0_0_20px_rgba(255,122,92,0.15)] ">
    <h1 className="text-5xl font-bold text-[#E7EAF0] drop-shadow-[0_0_5px_rgba(0,0,0,0.5)]">Daniel Arapé</h1>
    <h2 className="text-3xl font-semibold text-[#FF7A5C] mt-1">Full-Stack Developer</h2>
    <p className="text-[#C9C6D0] max-w-2xs mt-2 leading-relaxed">Curioso por naturaleza, disfruto unir la lógica del código con el arte del diseño.</p>
    <div className="flex gap-3 mt-4 font-semibold"> 
      <a href="" className="bg-[#FF7A5C] hover:bg-[#FF9E6E] text-[#FFF9F3] py-2 px-5 rounded-lg shadow-[0_0_12px_rgba(255,122,92,0.4)] transition-all duration-300">Proyectos</a>
      <a href="" className="bg-[#4EC9F0] hover:bg-[#9AEFFF] text-[#1F1728] py-2 px-5 rounded-lg shadow-[0_0_12px_rgba(78,201,240,0.4)] transition-all duration-300">Contactame</a>
    </div>
  </div>

  {/*Selector de idioma*
  <div className="col-span-4 row-span-1 bg-gradient-to-br from-[#2B2235] via-[#3B2A4D] to-[#1F1728] text-white flex flex-col gap-3 items-center justify-center text-center rounded-2xl shadow-[0_0_15px_rgba(255,122,92,0.2)] p-5">
    {/* Título *
    <h2 className="text-lg font-semibold text-[#E7EAF0] tracking-wide">
      Idioma
    </h2>

    {/* Selector tipo píldora
    {/**
    <div className="flex bg-[#1F1728] border border-[#FF7A5C]/40 justify-around p-1.5 rounded-full w-32 transition-all duration-300">
      <button className="flex-1 py-1 bg-[#FF7A5C] text-[#FFF9F3] rounded-full font-medium shadow-[0_0_8px_rgba(255,122,92,0.5)] transition-all cursor-pointer">Es</button>
      <button className="flex-1 py-1 text-[#B9B4C9] hover:text-[#9AEFFF] transition-all cursor-pointer">En</button>
    </div>

    {/* Texto descriptivo 
    <p className="text-sm text-[#B9B4C9] flex items-center">
      Selecciona tu idioma preferido 🌍
    </p>
  </div>
  
  {/* Tarjeta de aprendizaje 
  <div className="col-span-4 row-span-1 p-5 bg-[url('/images/Estudio.jpg')] bg-cover bg-left rounded-2xl shadow-[0_0_20px_rgba(78,201,240,0.15)] flex flex-col ">
    <h2 className="text-xl text-[#FF7A5C] font-semibold mb-1">En Constante Aprendizaje</h2>
    <p className="text-[#E7EAF0]">Estudiante de Ingeniería de Sistemas (9° semestre)</p>
    <p className="text-[#E7EAF0]">Estudiante de Lexpin</p>
    <p className="text-[#E7EAF0]">Autodidacta</p>
  </div>

  {/*Fila 2
  {/*Proyecto 1
  <div className="col-span-5 row-span-2 p-4 bg-[#2B2235] rounded-2xl shadow-[0_0_20px_rgba(255,122,92,0.15)] flex items-center justify-center">
    <p className="text-4xl font-bold text-purple-100">Proyecto 1</p>
  </div>

  <div className="relative col-span-4 row-span-2 p-4 from-[#2A1E36] via-[#3B2A4D] to-[#1F1728] rounded-2xl shadow-[0_0_20px_rgba(78,201,240,0.15)] flex flex-col items-center justify-center">
    <h2 className="text-2xl font-semibold text-[#4EC9F0] mb-4">Tecnologías que Domino</h2>
    {/* Íconos (flotarán luego con GSAP) *
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(78,201,240,0.15),transparent_70%)]"></div>
  </div>

  {/* GitHub
  <div className="col-span-3 row-span-2 relative rounded-2xl bg-gradient-to-br from-[#17121F] via-[#24182E] to-[#1F1728] overflow-hidden shadow-[0_0_25px_rgba(255,122,92,0.1)] flex flex-col items-center justify-center">
    <div className="relative z-10 text-center">
      {/* GitHub Icon
      <h2 className="text-xl font-semibold text-[#E7EAF0]">Mi GitHub</h2>
      <a href="https://github.com/tuusuario" target="_blank" className="mt-3 inline-block text-[#FF7A5C] hover:text-[#FF9E6E] font-medium transition-all">Ver perfil →</a>
    </div>
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,122,92,0.15),transparent_70%)] animate-pulse"></div>
  </div>

  {/*Fila 3
  <div className="col-span-4 row-span-1 bg-green-500 text-white flex items-center justify-center rounded-lg shadow-lg">
    <p className="text-xl">Whatsapp</p>
  </div>
  <div className="col-span-8 row-span-2 bg-blue-500 text-white flex items-center justify-center rounded-lg shadow-lg">
    <p className="text-2xl font-bold">Ver todos los proyectos</p>
  </div>
  <div className="col-span-4 row-span-1 bg-yellow-500 text-white flex items-center justify-center rounded-lg shadow-lg">
    <p className="text-xl">Linkedin</p>
  </div>

  {/*Fila 4
  <div className="col-span-6 row-span-2 bg-pink-200 rounded-xl p-4 flex items-center justify-center">
    <p className="text-4xl font-bold text-purple-900">Proyecto 2</p>
  </div>
  <div className="col-span-2 row-span-2 bg-gray-800 text-white rounded-xl p-4 flex items-center justify-center">
    <p className="text-3xl font-bold z-10">Habilidades Blandas</p>
  </div>
  <div className="col-span-4 row-span-2 bg-pink-200 rounded-xl p-4 flex items-center justify-center">
    <p className="text-4xl font-bold text-purple-900">Sobre mi</p>
  </div>

  {/*Fila 5
  <div className="col-span-4 row-span-2 bg-cyan-200 rounded-xl p-4 flex items-center justify-center">
    <p className="text-4xl font-bold text-cyan-900">Creative Corner</p>
  </div>
  <div className="col-span-5 row-span-2 bg-slate-800 text-white rounded-xl p-4 flex items-center justify-center">
    <p className="text-3xl font-bold z-10">Proyecto 3</p>
  </div>
  <div className="col-span-3 row-span-2 bg-red-200 rounded-xl p-4 flex items-center justify-center">
    <p className="text-4xl font-bold text-pink-800">Extra</p>
  </div>
</div>
  */}