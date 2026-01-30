export default function ToggleSwitch({ enabled, onChange }) {
  return (
    <button
      onClick={() => onChange(!enabled)}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 cursor-pointer
        ${enabled ? "bg-green-500" : "bg-muted"}`}
    >
      <span
        className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform duration-300
          ${enabled ? "translate-x-5" : "translate-x-1"}`}
      />
    </button>
  );
}
