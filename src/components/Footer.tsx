export default function Footer() {
    return (
        <footer className="border-t border-white/5 py-8">
            <div className="mx-auto max-w-5xl px-6 text-center text-xs text-neutral-500">
                <p>
                    &copy; {new Date().getFullYear()} Jinho. Built with Next.js &amp;
                    TailwindCSS.
                </p>
            </div>
        </footer>
    );
}
