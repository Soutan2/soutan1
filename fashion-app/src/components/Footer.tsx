export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-6xl px-4 py-8 text-center text-sm text-zinc-600">
        © {new Date().getFullYear()} FitForge · Built with Next.js
      </div>
    </footer>
  );
}
