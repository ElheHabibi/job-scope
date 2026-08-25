function Theme() {
  return (
    <button
      type="button"
      aria-label="Toggle theme"
      className="hidden h-10 w-10 items-center justify-center rounded-full text-textSecondary transition-colors hover:bg-surface hover:text-primary sm:flex"
    >
      ☼
    </button>
  );
}

export default Theme;
