function Footer() {
  return (
    <footer className="shrink-0 border-t border-slate-200 bg-white px-4 py-3 lg:px-6">
      <p className="text-sm text-slate-500">
        © {new Date().getFullYear()} letmegrab. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
