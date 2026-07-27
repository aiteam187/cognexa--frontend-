import { useRef, useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";

interface Position {
  left: number;
  width: number;
  opacity: number;
}

interface NavLinkItem {
  label: string;
  to: string;
}

interface NavDropdownItem {
  label: string;
  children: NavLinkItem[];
}

type NavItem = NavLinkItem | NavDropdownItem;

function isDropdownItem(item: NavItem): item is NavDropdownItem {
  return "children" in item;
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
      {items.map((item) =>
        isDropdownItem(item) ? (
          <DropdownTab
            key={item.label}
            item={item}
            active={item.children.some((child) => pathname === child.to)}
          />
        ) : (
          <Tab
            key={item.to}
            to={item.to}
            active={pathname === item.to}
            setPosition={setPosition}
          >
            {item.label}
          </Tab>
        ),
      )}

      <Cursor position={position} />
    </ul>
  );
}

const DropdownTab = ({
  item,
  active,
}: {
  item: NavDropdownItem;
  active: boolean;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <li
      className="relative z-10"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className={`relative z-10 px-4 py-2 text-sm font-semibold transition-colors duration-200 ${
          active ? "text-[#0E8FFB]" : "text-gray-900 hover:text-[#0E8FFB]"
        }`}
        aria-expanded={open}
      >
        {item.label}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-1/2 min-w-48 -translate-x-1/2 pt-2"
          >
            <div className="rounded-xl border border-gray-100 bg-white p-2 shadow-lg">
              {item.children.map((child) => (
                <Link
                  key={child.to}
                  to={child.to}
                  className="block rounded-lg px-4 py-2.5 text-sm font-medium text-gray-700 transition-colors duration-150 hover:bg-[#0E8FFB]/10 hover:text-[#0E8FFB]"
                >
                  {child.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
};

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
