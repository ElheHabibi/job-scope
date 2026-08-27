function PaginationControls() {
  return (
    <div className="px-4 py-2 flex flex-row-reverse">
      <button className="flex items-center rounded-4xl bg-muted px-1.5 py-0.5">
        <span className="text-white font-medium text-xs pl-2">Page 2</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="white"
          viewBox="0 0 24 24"
          transform="scale(-1,1) "
        >
          <path d="M11.79 6.29 6.09 12l5.7 5.71 1.42-1.42L9.91 13H18v-2H9.91l3.3-3.29z"></path>
        </svg>
      </button>
    </div>
  );
}

export default PaginationControls;
