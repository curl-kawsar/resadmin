import { FaHome, FaUtensils, FaUsers, FaPlus, FaEdit, FaList, FaStore, FaPhone } from "react-icons/fa";
import Link from "next/link";

const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: <FaHome />,
        label: "Dashboard",
        href: "/dashboard",
        visible: ["admin", "staff"],
      },
      {
        icon: <FaPlus />,
        label: "Add Items",
        href: "/add-items",
        visible: ["admin", "staff"],
      },
      {
        icon: <FaEdit />,
        label: "Manage Items",
        href: "/manage-items",
        visible: ["admin", "staff"],
      },
      {
        icon: <FaUsers />,
        label: "All Users",
        href: "/all-users",
        visible: ["admin"],
      },
      // {
      //   icon: <FaHome />,
      //   label: "Home",
      //   href: "/",
      //   visible: ["admin", "staff", "customer"],
      // },
      {
        icon: <FaUtensils />,
        label: "Our Menu",
        href: "/our-menu",
        visible: ["admin", "staff", "customer"],
      },
      {
        icon: <FaStore />,
        label: "Our Shop",
        href: "/our-shop",
        visible: ["admin", "staff", "customer"],
      },
      {
        icon: <FaPhone />,
        label: "Contact",
        href: "/contact",
        visible: ["admin", "staff", "customer"],
      },
    ],
  },
];

const Menu = () => {
  return (
    <div className="mt-4 text-[18px] m-5">
      {menuItems.map((i, index) => (
        <div className="flex flex-col gap-2" key={index}>
          <span className="hidden lg:block text-white font-light my-4">{i.title}</span>
          {i.items.map((item) => (
            <div key={item.label}>
              <Link href={item.href} className="flex items-center justify-center lg:justify-start gap-4 text-white py-4">
                {item.icon}
                <span className="hidden lg:block">{item.label}</span>
              </Link>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;