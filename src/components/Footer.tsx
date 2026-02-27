export default function Footer() {
    return (
        <footer className="border-t border-lavender-400/5 py-8">
            <div className="mx-auto max-w-5xl px-6 text-center text-xs text-lavender-400/30">
                <p>
                    &copy; {new Date().getFullYear()} Bruce &mdash; built under city
                    lights ✦
                </p>
            </div>
        </footer>
    );
}
