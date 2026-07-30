function PageLoader() {
  return (
    <div
      className="flex min-h-[70vh] w-full flex-col items-center justify-center gap-6 px-5 py-24"
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      <span className="h-9 w-9 animate-spin rounded-full border-2 border-gray-200 border-t-[#0E8FFB]" />

      <div className="w-full max-w-md space-y-3">
        <div className="mx-auto h-4 w-2/3 animate-pulse rounded-full bg-gray-100" />
        <div className="mx-auto h-4 w-1/2 animate-pulse rounded-full bg-gray-100" />
      </div>

      <span className="sr-only">Loading page…</span>
    </div>
  );
}

export default PageLoader;
