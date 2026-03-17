export default function PixelSword() {
  return (
    <div className="nav-sword-wrapper mr-2" aria-hidden="true">

      {/* Sheath — fixed, never moves */}
      <svg
        width="16"
        height="9"
        viewBox="0 0 16 9"
        className="nav-sheath shrink-0"
      >
        <rect x="0" y="3" width="1" height="3" className="sheath-fill" />
        <rect x="1" y="2" width="1" height="5" className="sheath-fill" />
        <rect x="2" y="1" width="12" height="7" className="sheath-fill" />
        <rect x="14" y="2" width="2" height="5" className="sheath-rim" />
      </svg>

      {/* Sword — translates right as one unit */}
      <div className="nav-sword">
        <svg
          width="38"
          height="9"
          viewBox="0 0 38 9"
        >
          {/* Tip */}
          <rect x="0" y="4" width="1" height="1" className="blade-fill" />
          <rect x="1" y="3" width="1" height="3" className="blade-fill" />
          <rect x="2" y="2" width="1" height="5" className="blade-fill" />
          {/* Extended blade body — 20px instead of 10px */}
          <rect x="3" y="1" width="20" height="7" className="blade-fill" />
          {/* Guard */}
          <rect x="23" y="0" width="2" height="9" className="hilt-guard" />
          {/* Grip */}
          <rect x="25" y="2" width="9" height="5" className="hilt-grip" />
          {/* Pommel */}
          <rect x="34" y="1" width="4" height="7" className="hilt-pommel" />
        </svg>
      </div>

    </div>
  );
}
