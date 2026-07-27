import styles from "./BubbleText.module.css";

interface BubbleTextProps {
  text: string;
  active: boolean;
  className?: string;
}

function BubbleText({ text, active, className }: BubbleTextProps) {
  return (
    <span className={`${styles.wrap} ${className ?? ""}`}>
      {text.split("").map((char, idx) => (
        <span
          key={idx}
          className={`${styles.letter} ${active ? styles.active : ""}`}
          style={{ transitionDelay: `${idx * 25}ms` }}
        >
          {char === " " ? " " : char}
        </span>
      ))}
    </span>
  );
}

export default BubbleText;
