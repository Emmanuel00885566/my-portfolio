// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-400 py-6 border-t border-gray-700">
      <div className="max-w-6xl mx-auto px-6 text-center space-y-2">
        <p className="text-sm">
          © {new Date().getFullYear()} Adeboye Emmanuel Oluwatosin
        </p>

        <p className="text-xs">
          Built by Emmanuel Adeboye
        </p>
      </div>
    </footer>
  );
}