// Generic engine-warning pictogram, drawn for this site.
export function EngineIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 40" fill="none" aria-hidden="true">
      <path
        d="M14 9h9V5h12v4h8l4 5h5v-4h5v20h-5v-4h-5l-5 6H20l-6-6H9v5H4V14h5v5h5V9Z"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}
