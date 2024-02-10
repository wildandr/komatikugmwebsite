import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenu, NavbarMenuItem, NavbarMenuToggle, Dropdown,DropdownMenu, DropdownItem, DropdownTrigger} from "@nextui-org/react";
import {KomatikLogo} from "./komatikLogo";
import {ChevronDown, Lock, Activity, Flash, Server, TagUser, Scale} from "./icons";

export default function MenuNavbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
  ];

  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} />,
    scale: <Scale className="text-warning" fill="currentColor" size={30} />,
    lock: <Lock className="text-success" fill="currentColor" size={30} />,
    activity: <Activity className="text-secondary" fill="currentColor" size={30} />,
    flash: <Flash className="text-primary" fill="currentColor" size={30} />,
    server: <Server className="text-success" fill="currentColor" size={30} />,
    user: <TagUser className="text-danger" fill="currentColor" size={30} />,
  };

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="font-sans bg-slate-500 bg-opacity-10 backdrop-blur-md ">
      <NavbarContent>
       
        <NavbarBrand className="flex justify-start ">
       <KomatikLogo />
        </NavbarBrand>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden flex justify-end"
        />
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
      <NavbarItem >
          <Link className="text-white text-[16px]  " href="/" >
            Home
          </Link>
        </NavbarItem>
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent text-white text-[16px] data-[hover=true]:bg-transparent"
                endContent={icons.chevron}
                radius="sm"
                variant="dark"
              >
                Our Team
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label=" features"
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="autoscaling"
              description="ACME scales apps to meet user demand, automagically, based on load."
              startContent={icons.scale}
            >
              Autoscaling
            </DropdownItem>
            <DropdownItem
              key="usage_metrics"
              description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
              startContent={icons.activity}
            >
              Usage Metrics
            </DropdownItem>
            <DropdownItem
              key="production_ready"
              description="ACME runs on ACME, join us and others serving requests at web scale."
              startContent={icons.flash}
            >
              Production Ready
            </DropdownItem>
            <DropdownItem
              key="99_uptime"
              description="Applications stay on the grid with high availability and high uptime guarantees."
              startContent={icons.server}
            >
              +99% Uptime
            </DropdownItem>
            <DropdownItem
              key="supreme_support"
              description="Overcome any challenge with a supporting team ready to respond."
              startContent={icons.user}
            >
              +Supreme Support
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavbarItem >
          <Link className="text-white text-[16px]" href="/about" >
            About Us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} className="text-[14px] ml-2 px-3 rounded-full border-secondary text-secondary bg-transparent border" href="#" >
            CONTACT US
          </Button>
        </NavbarItem>
      </NavbarContent>
   
      <NavbarMenu className="bg-slate-500 bg-opacity-10 backdrop-blur-sm px-0 ">
      {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.label}-${index}`}>
            <Link
              style={{ color: index === menuItems.length - 1 ? "#FFA800" : "white" }}
              className="w-full px-2 font-sans"
              href={item.href}
              size="lg"
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
