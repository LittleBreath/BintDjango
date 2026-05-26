import { useState } from 'react';
import { Menu, X } from "lucide-react";

export default function App(){
  const [isOpen, setIsOpen] = useState(false);

  return(
    <div className="bg-slate-800 text-white min-h-screen font-sans">
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-slate-900/80 bg-slate-950/90 backdrop-blur-xl shadow-black/20 shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-20">
          <a href="#home" className="text-lg font-semibold tracking-wide text-white">Ifaadati</a>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#home" className="hover:text-pink-500 transition">Home</a>
            <a href="#projects" className="hover:text-pink-500 transition">Projects</a>
            <a href="#expertise" className="hover:text-pink-500 transition">Expertise</a>
            <a href="#contact" className="hover:text-pink-500 transition">Contact</a>
          </div>
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden rounded-2xl bg-white/10 p-2 text-white transition hover:bg-white/20">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden animate-slide-down rounded-3xl border border-white/10 bg-slate-950/95 px-5 py-4 shadow-2xl backdrop-blur-xl mx-4 mb-4 text-sm">
            <a href="#home" onClick={() => setIsOpen(false)} className="block rounded-xl px-3 py-2 hover:bg-slate-900 transition">Home</a>
            <a href="#projects" onClick={() => setIsOpen(false)} className="block rounded-xl px-3 py-2 hover:bg-slate-900 transition">Projects</a>
            <a href="#expertise" onClick={() => setIsOpen(false)} className="block rounded-xl px-3 py-2 hover:bg-slate-900 transition">Expertise</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="block rounded-xl px-3 py-2 hover:bg-slate-900 transition">Contact</a>
            <a href="mailto:ifadathamadi@gmail.com" onClick={() => setIsOpen(false)} className="block rounded-xl px-3 py-2 hover:bg-slate-900 transition">Email</a>
            <a href="tel:+255693752566" onClick={() => setIsOpen(false)} className="block rounded-xl px-3 py-2 hover:bg-slate-900 transition">Phone</a>
          </div>
        )}
      </nav>

      <main className="pt-28">
        <section id="home" className="fade-in relative flex-col md:flex-row items-center justify-between px-6 md:px-20 py-32 overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-pink-500/60 mix-blend-screen blur-3xl opacity-70 animate-pulse"></div>
            <div className="absolute right-10 top-0 h-72 w-72 rounded-full bg-purple-500/50 mix-blend-screen blur-3xl opacity-70 animate-pulse"></div>
          </div>
          <div className="max-w-xl">
            <p className="text-sm uppercase tracking-[0.34em] text-pink-400">Full-stack Web Developer</p>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white mt-5">Ifaadati Yusufu</h1>
            <p className="text-2xl md:text-3xl mt-6 text-slate-300">I build web applications that solve real-world problems with modern, responsive design.</p>
            <p className="text-gray-400 mt-6 max-w-xl leading-8">
              Clean code, thoughtful layouts, and fast experiences are the core of my work. I create web apps that look professional and feel polished on every device.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="#projects" className="inline-flex items-center justify-center rounded-full bg-pink-500 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-pink-500/20 transition hover:bg-pink-400">View Projects</a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 py-3 text-sm font-semibold text-white transition hover:bg-white/10">Contact Me</a>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full bg-white/10 px-4 py-2 text-sm text-slate-100">React</span>
              <span className="rounded-full bg-white/10 px-4 py-2 text-sm text-slate-100">Django</span>
              <span className="rounded-full bg-white/10 px-4 py-2 text-sm text-slate-100">Tailwind</span>
              <span className="rounded-full bg-white/10 px-4 py-2 text-sm text-slate-100">JavaScript</span>
              <span className="rounded-full bg-white/10 px-4 py-2 text-sm text-slate-100">Vite</span>
              <span className="rounded-full bg-white/10 px-4 py-2 text-sm text-slate-100">API Integration</span>
            </div>
          </div>

          <div className="relative md:order-first md:mr-8 mt-12 md:mt-0">
            <div className="w-72 h-72 md:w-80 md:h-80 rounded-full bg-pink-500 p-1 shadow-2xl shadow-pink-500/20">
              <img
                src="/Django.jpg"
                alt="Ifaadati Yusufu"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>
        </section>

        <section id="expertise" className="fade-in px-6 md:px-20 py-20 bg-slate-950">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 flex flex-col gap-3">
              <p className="text-sm uppercase tracking-[0.3em] text-pink-400">What I do</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Expertise</h2>
              <p className="max-w-2xl text-gray-400 leading-7">
                I deliver polished front-end experiences, solid back-end systems, and reliable deployments. Every app is built to perform smoothly and look great.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl">
                <h3 className="font-semibold mb-3 text-white">Frontend</h3>
                <p className="text-gray-400 text-sm">React, Tailwind CSS, responsive UI, animations, clean interfaces.</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl">
                <h3 className="font-semibold mb-3 text-white">Backend</h3>
                <p className="text-gray-400 text-sm">Django, REST APIs, database integration, authentication, business logic.</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl">
                <h3 className="font-semibold mb-3 text-white">Deployment</h3>
                <p className="text-gray-400 text-sm">Fast, stable builds with production-ready performance and clean deployments.</p>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full bg-white/10 px-4 py-2 text-sm text-slate-100">React</span>
              <span className="rounded-full bg-white/10 px-4 py-2 text-sm text-slate-100">Django</span>
              <span className="rounded-full bg-white/10 px-4 py-2 text-sm text-slate-100">Tailwind</span>
              <span className="rounded-full bg-white/10 px-4 py-2 text-sm text-slate-100">JavaScript</span>
              <span className="rounded-full bg-white/10 px-4 py-2 text-sm text-slate-100">Vite</span>
              <span className="rounded-full bg-white/10 px-4 py-2 text-sm text-slate-100">Git</span>
            </div>
          </div>
        </section>

        <section id="projects" className="fade-in px-6 md:px-20 py-20 bg-gray-950">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-pink-500">Projects</h2>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-3xl bg-white text-black p-8 shadow-lg hover:-translate-y-1 transition-transform">
                <h3 className="text-2xl font-bold mb-3">Lost and Found Management System</h3>
                <p className="text-gray-600 mb-4 leading-7">
                  A full-stack web application designed to manage lost and found items for schools, colleges, and offices. Users can report lost items, browse found items, and contact the admin directly.
                </p>
                <p className="text-gray-600 mb-4 leading-7">
                  The admin dashboard allows managing reports, approving matches, updating item status, and handling user accounts.
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Technologies Used:</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">PHP</span>
                    <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">MySQL</span>
                    <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">JavaScript</span>
                    <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">HTML5/CSS</span>
                    <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">Bootstrap</span>
                  </div>
                </div>
              </div>
              <div className="rounded-3xl bg-white text-black p-8 shadow-lg hover:-translate-y-1 transition-transform">
                <h3 className="text-2xl font-bold mb-3">Personal Portfolio Website</h3>
                <p className="text-gray-600 mb-4 leading-7">
                  A responsive personal portfolio website to showcase skills, projects, and contact information. Built with React and Tailwind CSS for a fast, modern experience.
                </p>
                <p className="text-gray-600 mb-4 leading-7">
                  The site is designed to reflect professionalism and strong development expertise while staying easy to update and maintain.
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Technologies Used:</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">React</span>
                    <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">Tailwind</span>
                    <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">JavaScript</span>
                    <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">Vite</span>
                    <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">Lucide Icons</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="fade-in px-6 md:px-20 py-20 bg-slate-800">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12">
              <p className="text-sm uppercase tracking-[0.3em] text-pink-400">Get in touch</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Contact</h2>
            </div>
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl">
                <p className="text-gray-300 leading-7">
                  Have a project in mind? Send a message and let’s discuss how I can help build your next website or web application.
                </p>
                <div className="mt-8 space-y-4 text-sm text-slate-300">
                  <div>
                    <p className="font-semibold text-white">Email</p>
                    <a href="mailto:ifadathamadi@gmail.com" className="text-pink-400 hover:underline">ifadathamadi@gmail.com</a>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Phone</p>
                    <a href="tel:+255693752566" className="text-pink-400 hover:underline">+255 693 752 566</a>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Location</p>
                    <p>Tanzania</p>
                  </div>
                </div>
              </div>
              <form className="rounded-3xl border border-white/10 bg-slate-950/80 p-8 shadow-xl">
                <div className="grid gap-5">
                  <label className="text-sm text-slate-300">
                    Name
                    <input type="text" placeholder="Your name" className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-pink-500" />
                  </label>
                  <label className="text-sm text-slate-300">
                    Email
                    <input type="email" placeholder="Your email" className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-pink-500" />
                  </label>
                  <label className="text-sm text-slate-300">
                    Message
                    <textarea rows="5" placeholder="Tell me about your project" className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-pink-500"></textarea>
                  </label>
                  <button className="inline-flex items-center justify-center rounded-full bg-pink-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-pink-400">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-900 bg-slate-950/90 px-6 py-6 text-center text-sm text-slate-400">
        &copy; Ifaadati Yusufu. All rights reserved.
      </footer>
    </div>
  )
}
