export default function PixelFoliage() {
  return (
    <>
      {/* Left side */}
      <div
        className="pointer-events-none fixed top-0 left-0 z-20 hidden lg:block"
        aria-hidden="true"
      >
        <svg width="120" height="600" viewBox="0 0 120 600">
          {/* ── Main left vine trunk ── */}
          <rect x="8" y="0" width="4" height="600" className="foliage-vine" />

          {/* ── Branch 1 — short left stub at y=40 ── */}
          <rect x="0" y="40" width="8" height="3" className="foliage-vine" />
          {/* Leaf cluster */}
          <rect
            x="0"
            y="34"
            width="8"
            height="3"
            className="foliage-leaf-dark"
          />
          <rect x="0" y="37" width="12" height="6" className="foliage-leaf" />
          <rect
            x="2"
            y="43"
            width="8"
            height="3"
            className="foliage-leaf-dark"
          />
          <rect x="4" y="46" width="5" height="2" className="foliage-leaf" />

          {/* ── Branch 2 — long right branch at y=90 ── */}
          <rect x="12" y="90" width="30" height="3" className="foliage-vine" />
          <rect x="42" y="88" width="3" height="7" className="foliage-vine" />
          {/* Leaf cluster at branch end */}
          <rect
            x="38"
            y="80"
            width="12"
            height="4"
            className="foliage-leaf-dark"
          />
          <rect x="36" y="84" width="16" height="7" className="foliage-leaf" />
          <rect
            x="38"
            y="91"
            width="12"
            height="4"
            className="foliage-leaf-dark"
          />
          <rect x="40" y="95" width="8" height="3" className="foliage-leaf" />
          {/* Small hanging leaf from branch */}
          <rect x="28" y="93" width="6" height="3" className="foliage-vine" />
          <rect x="26" y="96" width="10" height="5" className="foliage-leaf" />
          <rect
            x="28"
            y="101"
            width="6"
            height="3"
            className="foliage-leaf-dark"
          />

          {/* ── Branch 3 — left droop at y=150 ── */}
          <rect x="0" y="150" width="8" height="3" className="foliage-vine" />
          <rect
            x="0"
            y="144"
            width="10"
            height="3"
            className="foliage-leaf-dark"
          />
          <rect x="0" y="147" width="14" height="8" className="foliage-leaf" />
          <rect
            x="2"
            y="155"
            width="10"
            height="4"
            className="foliage-leaf-dark"
          />
          <rect x="4" y="159" width="6" height="3" className="foliage-leaf" />

          {/* ── Branch 4 — wide right branch at y=210 ── */}
          <rect x="12" y="210" width="50" height="3" className="foliage-vine" />
          {/* Mid-branch leaf */}
          <rect x="30" y="205" width="3" height="8" className="foliage-vine" />
          <rect
            x="26"
            y="198"
            width="12"
            height="4"
            className="foliage-leaf-dark"
          />
          <rect x="24" y="202" width="16" height="7" className="foliage-leaf" />
          <rect
            x="26"
            y="209"
            width="12"
            height="4"
            className="foliage-leaf-dark"
          />
          {/* End cluster */}
          <rect x="58" y="204" width="3" height="9" className="foliage-vine" />
          <rect
            x="54"
            y="196"
            width="14"
            height="4"
            className="foliage-leaf-dark"
          />
          <rect x="52" y="200" width="18" height="8" className="foliage-leaf" />
          <rect
            x="54"
            y="208"
            width="14"
            height="5"
            className="foliage-leaf-dark"
          />
          <rect x="56" y="213" width="10" height="3" className="foliage-leaf" />
          {/* Hanging tendril from end */}
          <rect x="62" y="213" width="3" height="20" className="foliage-vine" />
          <rect x="60" y="233" width="8" height="5" className="foliage-leaf" />
          <rect
            x="62"
            y="238"
            width="5"
            height="3"
            className="foliage-leaf-dark"
          />

          {/* ── Branch 5 — left at y=280 ── */}
          <rect x="0" y="280" width="8" height="3" className="foliage-vine" />
          <rect
            x="0"
            y="274"
            width="9"
            height="3"
            className="foliage-leaf-dark"
          />
          <rect x="0" y="277" width="13" height="7" className="foliage-leaf" />
          <rect
            x="2"
            y="284"
            width="9"
            height="4"
            className="foliage-leaf-dark"
          />
          <rect x="3" y="288" width="6" height="2" className="foliage-leaf" />

          {/* ── Branch 6 — medium right at y=340 ── */}
          <rect x="12" y="340" width="35" height="3" className="foliage-vine" />
          <rect x="44" y="336" width="3" height="7" className="foliage-vine" />
          <rect
            x="40"
            y="328"
            width="12"
            height="4"
            className="foliage-leaf-dark"
          />
          <rect x="38" y="332" width="16" height="7" className="foliage-leaf" />
          <rect
            x="40"
            y="339"
            width="12"
            height="5"
            className="foliage-leaf-dark"
          />
          <rect x="42" y="344" width="8" height="3" className="foliage-leaf" />
          {/* Mid branch droop */}
          <rect x="24" y="343" width="3" height="14" className="foliage-vine" />
          <rect x="21" y="357" width="10" height="5" className="foliage-leaf" />
          <rect
            x="23"
            y="362"
            width="6"
            height="3"
            className="foliage-leaf-dark"
          />

          {/* ── Branch 7 — left at y=400 ── */}
          <rect x="0" y="400" width="8" height="3" className="foliage-vine" />
          <rect
            x="0"
            y="394"
            width="11"
            height="3"
            className="foliage-leaf-dark"
          />
          <rect x="0" y="397" width="15" height="8" className="foliage-leaf" />
          <rect
            x="2"
            y="405"
            width="11"
            height="4"
            className="foliage-leaf-dark"
          />
          <rect x="4" y="409" width="7" height="3" className="foliage-leaf" />

          {/* ── Branch 8 — long right at y=460 ── */}
          <rect x="12" y="460" width="45" height="3" className="foliage-vine" />
          <rect x="54" y="456" width="3" height="7" className="foliage-vine" />
          <rect
            x="50"
            y="448"
            width="14"
            height="4"
            className="foliage-leaf-dark"
          />
          <rect x="48" y="452" width="18" height="8" className="foliage-leaf" />
          <rect
            x="50"
            y="460"
            width="14"
            height="5"
            className="foliage-leaf-dark"
          />
          <rect x="52" y="465" width="10" height="3" className="foliage-leaf" />

          {/* ── Branch 9 — left at y=520 ── */}
          <rect x="0" y="520" width="8" height="3" className="foliage-vine" />
          <rect
            x="0"
            y="514"
            width="10"
            height="3"
            className="foliage-leaf-dark"
          />
          <rect x="0" y="517" width="14" height="7" className="foliage-leaf" />
          <rect
            x="2"
            y="524"
            width="10"
            height="4"
            className="foliage-leaf-dark"
          />

          {/* ── Fade out — sparse leaves near bottom ── */}
          <rect x="12" y="560" width="20" height="3" className="foliage-vine" />
          <rect x="30" y="556" width="3" height="7" className="foliage-vine" />
          <rect
            x="27"
            y="549"
            width="10"
            height="4"
            className="foliage-leaf-dark"
          />
          <rect x="25" y="553" width="14" height="7" className="foliage-leaf" />
          <rect
            x="27"
            y="560"
            width="10"
            height="4"
            className="foliage-leaf-dark"
          />
        </svg>
      </div>

      {/* Right side — mirrored */}
      <div
        className="pointer-events-none fixed top-0 right-0 z-20 hidden lg:block"
        aria-hidden="true"
        style={{ transform: "scaleX(-1)" }}
      >
        <svg width="120" height="600" viewBox="0 0 120 600">
          {/* ── Main right vine trunk ── */}
          <rect x="8" y="0" width="4" height="600" className="foliage-vine" />

          {/* ── Branch 1 ── */}
          <rect x="0" y="60" width="8" height="3" className="foliage-vine" />
          <rect
            x="0"
            y="54"
            width="8"
            height="3"
            className="foliage-leaf-dark"
          />
          <rect x="0" y="57" width="12" height="6" className="foliage-leaf" />
          <rect
            x="2"
            y="63"
            width="8"
            height="3"
            className="foliage-leaf-dark"
          />
          <rect x="4" y="66" width="5" height="2" className="foliage-leaf" />

          {/* ── Branch 2 ── */}
          <rect x="12" y="120" width="40" height="3" className="foliage-vine" />
          <rect x="48" y="118" width="3" height="7" className="foliage-vine" />
          <rect
            x="44"
            y="110"
            width="14"
            height="4"
            className="foliage-leaf-dark"
          />
          <rect x="42" y="114" width="18" height="7" className="foliage-leaf" />
          <rect
            x="44"
            y="121"
            width="14"
            height="5"
            className="foliage-leaf-dark"
          />
          <rect x="46" y="126" width="10" height="3" className="foliage-leaf" />
          <rect x="28" y="123" width="3" height="16" className="foliage-vine" />
          <rect x="25" y="139" width="10" height="5" className="foliage-leaf" />
          <rect
            x="27"
            y="144"
            width="6"
            height="3"
            className="foliage-leaf-dark"
          />

          {/* ── Branch 3 ── */}
          <rect x="0" y="190" width="8" height="3" className="foliage-vine" />
          <rect
            x="0"
            y="184"
            width="10"
            height="3"
            className="foliage-leaf-dark"
          />
          <rect x="0" y="187" width="14" height="8" className="foliage-leaf" />
          <rect
            x="2"
            y="195"
            width="10"
            height="4"
            className="foliage-leaf-dark"
          />
          <rect x="4" y="199" width="7" height="3" className="foliage-leaf" />

          {/* ── Branch 4 ── */}
          <rect x="12" y="250" width="55" height="3" className="foliage-vine" />
          <rect x="36" y="245" width="3" height="8" className="foliage-vine" />
          <rect
            x="32"
            y="237"
            width="12"
            height="4"
            className="foliage-leaf-dark"
          />
          <rect x="30" y="241" width="16" height="7" className="foliage-leaf" />
          <rect
            x="32"
            y="248"
            width="12"
            height="5"
            className="foliage-leaf-dark"
          />
          <rect x="64" y="247" width="3" height="9" className="foliage-vine" />
          <rect
            x="60"
            y="239"
            width="14"
            height="4"
            className="foliage-leaf-dark"
          />
          <rect x="58" y="243" width="18" height="8" className="foliage-leaf" />
          <rect
            x="60"
            y="251"
            width="14"
            height="5"
            className="foliage-leaf-dark"
          />
          <rect x="62" y="256" width="10" height="3" className="foliage-leaf" />

          {/* ── Branch 5 ── */}
          <rect x="0" y="320" width="8" height="3" className="foliage-vine" />
          <rect
            x="0"
            y="314"
            width="9"
            height="3"
            className="foliage-leaf-dark"
          />
          <rect x="0" y="317" width="13" height="7" className="foliage-leaf" />
          <rect
            x="2"
            y="324"
            width="9"
            height="4"
            className="foliage-leaf-dark"
          />
          <rect x="3" y="328" width="6" height="3" className="foliage-leaf" />

          {/* ── Branch 6 ── */}
          <rect x="12" y="380" width="38" height="3" className="foliage-vine" />
          <rect x="46" y="376" width="3" height="7" className="foliage-vine" />
          <rect
            x="42"
            y="368"
            width="12"
            height="4"
            className="foliage-leaf-dark"
          />
          <rect x="40" y="372" width="16" height="7" className="foliage-leaf" />
          <rect
            x="42"
            y="379"
            width="12"
            height="5"
            className="foliage-leaf-dark"
          />
          <rect x="44" y="384" width="8" height="3" className="foliage-leaf" />

          {/* ── Branch 7 — left at y=440 ── */}
          <rect x="0" y="440" width="8" height="3" className="foliage-vine" />
          <rect
            x="0"
            y="434"
            width="11"
            height="3"
            className="foliage-leaf-dark"
          />
          <rect x="0" y="437" width="15" height="8" className="foliage-leaf" />
          <rect
            x="2"
            y="445"
            width="11"
            height="4"
            className="foliage-leaf-dark"
          />

          {/* ── Branch 8 ── */}
          <rect x="12" y="500" width="30" height="3" className="foliage-vine" />
          <rect x="38" y="496" width="3" height="7" className="foliage-vine" />
          <rect
            x="34"
            y="488"
            width="12"
            height="4"
            className="foliage-leaf-dark"
          />
          <rect x="32" y="492" width="16" height="7" className="foliage-leaf" />
          <rect
            x="34"
            y="499"
            width="12"
            height="5"
            className="foliage-leaf-dark"
          />
          <rect x="36" y="504" width="8" height="3" className="foliage-leaf" />

          {/* ── Fade out ── */}
          <rect x="12" y="560" width="22" height="3" className="foliage-vine" />
          <rect x="32" y="556" width="3" height="7" className="foliage-vine" />
          <rect
            x="28"
            y="549"
            width="10"
            height="4"
            className="foliage-leaf-dark"
          />
          <rect x="26" y="553" width="14" height="7" className="foliage-leaf" />
          <rect
            x="28"
            y="560"
            width="10"
            height="4"
            className="foliage-leaf-dark"
          />
        </svg>
      </div>
    </>
  );
}
