interface DocTabProps {
  label: string;
  isActive: boolean;
  color: string;
  onClick: () => void;
}

export const DocTab = ({ label, isActive, color, onClick }: DocTabProps) => (
  <button
    className={`px-4 py-2 text-sm font-medium ${
      isActive
        ? `border-b-2 border-${color}-500 text-${color}-600`
        : "text-gray-500 hover:text-gray-700"
    }`}
    onClick={onClick}
  >
    {label}
  </button>
);

export default DocTab;
