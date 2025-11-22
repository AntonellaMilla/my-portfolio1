import { personalInfo } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">

          {/* Copyright */}
          <p className="text-gray-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} {personalInfo.name}. Todos los derechos reservados.
          </p>

          {/* Links */}
          <div className="flex gap-6">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-400 hover:text-white transition"
            >
              GitHub
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-400 hover:text-white transition"
            >
              LinkedIn
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Email"
              className="text-gray-400 hover:text-white transition"
            >
              Email
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}
