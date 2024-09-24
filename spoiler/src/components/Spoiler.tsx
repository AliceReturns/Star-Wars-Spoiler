import { useState } from "react";

interface SpoilerProps {
  children: React.ReactNode;
}

function Spoiler(props: SpoilerProps) {
  const [inverted, setInverted] = useState(false);

  const handleSpoilerClick = () => {
    setInverted(!inverted);
  };

  return (
    <div
      className="Tape"
      onClick={handleSpoilerClick}
      style={
        inverted
          ? { background: "black", color: "white" }
          : { background: "blue", color: "blue" }
      }
    >
      {/* In props.children erhalten wir Elemente die in unserer Komponente verschachtelt wurden */}
      {props.children}
    </div>
  );
}

export default Spoiler;
