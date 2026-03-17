interface PixelDiamondProps {
  active?: boolean;
}

export default function PixelDiamond({ active = false }: PixelDiamondProps) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 5 5"
      className="nav-diamond mr-4 shrink-0"
      aria-hidden="true"
      data-active={active}
    >
      {/*
        Pixel diamond shape — hand-placed pixels on a 5x5 grid:
          . . X . .
          . X X X .
          X X X X X
          . X X X .
          . . X . .
      */}
      <rect x="2" y="0" width="1" height="1" />
      <rect x="1" y="1" width="3" height="1" />
      <rect x="0" y="2" width="5" height="1" />
      <rect x="1" y="3" width="3" height="1" />
      <rect x="2" y="4" width="1" height="1" />
    </svg>
  );
}
