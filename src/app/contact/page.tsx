// app/contact/page.tsx
import { personalInfo } from '@/lib/data';
import { MdEmail } from 'react-icons/md';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const metadata = {
  title: 'Contacto',
  description: 'Ponte en contacto conmigo a través de este formulario o redes sociales',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 to-orange-200 py-16 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-8 md:p-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6 text-center">
          Contáctame
        </h1>

        <p className="text-gray-600 mb-10 text-center text-lg">
          ¿Tienes un proyecto o quieres decir hola? Llena el formulario y te responderé pronto.
        </p>

        <form className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="Nombre"
            className="border border-gray-300 px-4 py-3 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            className="border border-gray-300 px-4 py-3 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
          />
          <textarea
            placeholder="Mensaje"
            rows={5}
            className="border border-gray-300 px-4 py-3 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
          />
          <button
            type="submit"
            className="bg-pink-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-pink-600 hover:shadow-lg transition"
          >
            Enviar
          </button>
        </form>

        <div className="mt-12 text-center text-gray-800 space-y-4">
          <p className="flex items-center justify-center gap-2">
            <MdEmail className="text-pink-500 w-6 h-6" /> 
            <a href={`mailto:${personalInfo.email}`} className="hover:text-pink-600 transition">
              {personalInfo.email}
            </a>
          </p>
          <p className="flex items-center justify-center gap-2">
            <FaGithub className="text-gray-800 w-6 h-6" /> 
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-pink-600 transition">
              GitHub
            </a>
          </p>
          <p className="flex items-center justify-center gap-2">
            <FaLinkedin className="text-blue-700 w-6 h-6" /> 
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-pink-600 transition">
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
