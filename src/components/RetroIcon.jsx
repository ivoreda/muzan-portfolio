const iconMap = {
  brackets: (
    <>
      <rect x="18" y="24" width="124" height="104" rx="26" fill="#f8ec7d" />
      <path d="M61 54 L37 80 L61 106" fill="none" stroke="#111111" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M99 54 L123 80 L99 106" fill="none" stroke="#111111" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
      <path className="retro-wiggle" d="M83 48 L72 112" stroke="#111111" strokeWidth="10" strokeLinecap="round" />
    </>
  ),
  window: (
    <>
      <rect x="20" y="31" width="120" height="98" rx="22" fill="#ffb7a5" />
      <rect x="34" y="52" width="92" height="61" rx="12" fill="#fff8e7" />
      <circle cx="48" cy="43" r="5" fill="#111111" />
      <circle cx="64" cy="43" r="5" fill="#111111" />
      <path className="retro-wiggle" d="M51 78 H108" stroke="#111111" strokeWidth="9" strokeLinecap="round" />
      <path d="M51 96 H88" stroke="#111111" strokeWidth="8" strokeLinecap="round" />
    </>
  ),
  database: (
    <>
      <ellipse cx="80" cy="42" rx="47" ry="22" fill="#dfeee3" stroke="#111111" strokeWidth="5" />
      <path d="M33 42 V108 C33 121 54 132 80 132 C106 132 127 121 127 108 V42" fill="#dfeee3" stroke="#111111" strokeWidth="5" />
      <ellipse cx="80" cy="108" rx="47" ry="22" fill="#c7ff5a" stroke="#111111" strokeWidth="5" />
      <ellipse cx="80" cy="42" rx="31" ry="11" fill="#fff8e7" />
      <path className="retro-wiggle" d="M53 75 C68 84 94 84 108 75" fill="none" stroke="#111111" strokeWidth="8" strokeLinecap="round" />
    </>
  ),
  cloud: (
    <>
      <path d="M47 101 H116 C130 101 140 91 140 78 C140 65 130 56 117 56 C114 34 96 24 78 24 C58 24 42 38 39 59 C23 61 13 73 13 88 C13 96 27 101 47 101Z" fill="#dfeee3" stroke="#111111" strokeWidth="6" strokeLinejoin="round" />
      <path d="M58 117 H107 L101 98 H63Z" fill="#f8ec7d" stroke="#111111" strokeWidth="6" strokeLinejoin="round" />
      <path className="retro-wiggle" d="M52 79 H104" stroke="#111111" strokeWidth="8" strokeLinecap="round" />
    </>
  ),
  compass: (
    <>
      <circle cx="80" cy="80" r="56" fill="#f6cbdc" stroke="#111111" strokeWidth="6" />
      <path d="M93 35 L75 85 L48 112 L67 63 Z" fill="#fff8e7" stroke="#111111" strokeWidth="7" strokeLinejoin="round" />
      <path className="retro-wiggle" d="M86 75 L113 48" stroke="#111111" strokeWidth="8" strokeLinecap="round" />
    </>
  ),
  server: (
    <>
      <rect x="26" y="35" width="108" height="34" rx="13" fill="#ff8a00" stroke="#111111" strokeWidth="5" />
      <rect x="26" y="78" width="108" height="34" rx="13" fill="#101010" stroke="#111111" strokeWidth="5" />
      <path d="M45 52 H88" stroke="#fff8e7" strokeWidth="7" strokeLinecap="round" />
      <path d="M45 95 H88" stroke="#fff8e7" strokeWidth="7" strokeLinecap="round" />
      <circle cx="112" cy="52" r="7" fill="#f8ec7d" />
      <circle className="retro-blink" cx="112" cy="95" r="7" fill="#c7ff5a" />
    </>
  ),
  lock: (
    <>
      <rect x="39" y="68" width="82" height="56" rx="18" fill="#101010" stroke="#111111" strokeWidth="5" />
      <path d="M55 70 V55 C55 30 105 30 105 55 V70" fill="none" stroke="#ff8a00" strokeWidth="11" strokeLinecap="round" />
      <circle cx="80" cy="94" r="7" fill="#fff8e7" />
      <path d="M80 100 V109" stroke="#fff8e7" strokeWidth="7" strokeLinecap="round" />
    </>
  ),
  folder: (
    <>
      <path d="M22 50 H67 L80 65 H138 V122 H22 Z" fill="#f8ec7d" stroke="#111111" strokeWidth="7" strokeLinejoin="round" />
      <path className="retro-wiggle" d="M49 88 H111" stroke="#111111" strokeWidth="8" strokeLinecap="round" />
    </>
  ),
  badge: (
    <>
      <path d="M80 20 L98 50 L132 58 L109 84 L112 119 L80 105 L48 119 L51 84 L28 58 L62 50 Z" fill="#ffb7a5" stroke="#111111" strokeWidth="7" strokeLinejoin="round" />
      <circle cx="80" cy="75" r="18" fill="#fff8e7" stroke="#111111" strokeWidth="6" />
    </>
  ),
};

const RetroIcon = ({ name = "server", className = "" }) => (
  <svg className={`retro-icon ${className}`} viewBox="0 0 160 160" aria-hidden="true">
    {iconMap[name] || iconMap.server}
  </svg>
);

export default RetroIcon;
