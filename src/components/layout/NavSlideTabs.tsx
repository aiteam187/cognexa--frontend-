import { useRef, useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "motion/react";

interface Position {
  left: number;
  width: number;
  opacity: number;
}

interface NavItem {
  label: string;
  to: string;
}

function NavSlideTabs({ items }: { items: NavItem[] }) {
  const { pathname } = useLocation();
  const [position, setPosition] = useState<Position>({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      onMouseLeave={() => setPosition((pv) => ({ ...pv, opacity: 0 }))}
      className="relative flex items-center gap-1"
    >
      {items.map((item) => (
        <Tab
          key={item.to}
          to={item.to}
          active={pathname === item.to}
          setPosition={setPosition}
        >
          {item.label}
        </Tab>
      ))}

      <Cursor position={position} />
    </ul>
  );
}

const Tab = ({
  children,
  to,
  active,
  setPosition,
}: {
  children: React.ReactNode;
  to: string;
  active: boolean;
  setPosition: Dispatch<SetStateAction<Position>>;
}) => {
  const ref = useRef<HTMLLIElement>(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setPosition({ left: ref.current.offsetLeft, width, opacity: 1 });
      }}
      className="relative z-10"
    >
      <Link
        to={to}
        className={`relative z-10 block px-4 py-2 text-sm font-semibold transition-colors duration-200 ${
          active ? "text-[#0E8FFB]" : "text-gray-900 hover:text-[#0E8FFB]"
        }`}
      >
        {children}
      </Link>
    </li>
  );
};

const Cursor = ({ position }: { position: Position }) => {
  return (
    <motion.li
      animate={{ ...position }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      className="absolute top-0 z-0 h-full rounded-full bg-[#0E8FFB]/10"
    />
  );
};

export default NavSlideTabs;
