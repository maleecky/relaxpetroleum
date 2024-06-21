import Link from "next/link";
import React from "react";

type Item = {
  label: string;
  link: string;
};

type Props = {
  links: Item[];
  label: string;
};

const VerticalNav = ({ links, label }: Props) => {
  return (
    <div className="text-white">
      <h4 className="text-xl font-medium">{label}</h4>
      <ul className="mt-5 space-y-3">
        {links.map((link, index) => (
          <li key={index}>
            <Link className="text-white capitalize" href={link.link}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VerticalNav;
