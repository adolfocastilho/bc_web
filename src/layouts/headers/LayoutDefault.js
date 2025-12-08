import Link from "next/link";
import { useState, useEffect } from "react";
import appData from "@data/app.json";
import { useRouter } from 'next/router';

const DefaultHeader = ({ extraClass }) => {
  const [toggle, setToggle] = useState(false);

  const navItems = [];

  const [activeLink, setActiveLink] = useState('/');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      appData.header.menu.forEach((item) => {
        if (item.link.startsWith('#')) {
          const section = document.querySelector(item.link);
          if (section) {
            if (section.offsetTop <= scrollPosition && (section.offsetTop + section.offsetHeight) > scrollPosition) {
              setActiveLink(item.link);
            }
          }
        } else if (item.link === '/') {
          if (window.scrollY < 100) {
            setActiveLink('/');
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  appData.header.menu.forEach((item, index) => {
    let s_class1 = '';

    if (item.children != 0) {
      s_class1 = 'mil-has-children';
    }
    if (activeLink === item.link) {
      s_class1 += ' mil-active';
    }
    let newobj = Object.assign({}, item, { "classes": s_class1 });
    navItems.push(newobj);
  });

  return (
    <>

      {/* top bar */}
      <div className="mil-top-panel">

        {/* You need to remove the "mil-dot" class if you don't need a dot */}
        <Link href={appData.header.logo.link} className="mil-logo">
          <img src="/img/icons/icone_bechange.svg" alt="BeCHANGE" width="28" height="28" style={{ width: '28px', height: 'auto' }} />
        </Link>

        <div className={`mil-navigation ${toggle ? "mil-active" : ""}`}>
          <nav id="swupMenu" className="mil-menu-transition">
            <ul>
              {navItems.map((item, key) => (
                <li className={item.classes} key={`header-menu-item-${key}`}>
                  <a href={item.link} onClick={(e) => {
                    // Custom scroll for anchor links
                    if (item.link.startsWith('#')) {
                      e.preventDefault();
                      const section = document.querySelector(item.link);
                      if (section) {
                        // Find the section title (mil-section-title) inside the section
                        const sectionTitle = section.querySelector('.mil-section-title');
                        const targetElement = sectionTitle || section;

                        // Calculate position: 90px header + 50px offset above title
                        const headerHeight = 90;
                        const offsetAboveTitle = 50;
                        const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
                        const offsetPosition = elementPosition - headerHeight - offsetAboveTitle;

                        window.scrollTo({
                          top: offsetPosition,
                          behavior: 'smooth'
                        });
                      }
                    }

                    if (window.innerWidth <= 768) {
                      setTimeout(() => {
                        setToggle(false);
                      }, 2000);
                    }
                  }}>{item.label}</a>
                  {item.children != 0 &&
                    <ul>
                      {item.children.map((subitem, key2) => (
                        <li key={`header-submenu${key}-item-${key2}`}><Link href={subitem.link}>{subitem.label}</Link></li>
                      ))}
                    </ul>
                  }
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mil-top-panel-btns">
          <Link href="https://wa.me/5561996090943" target="_blank" rel="noopener noreferrer" className="mil-contact-btn">
            <img src="/img/icons/zap.svg" alt="WhatsApp" width="32" height="32" style={{ height: 'auto' }} />
          </Link>

          <div
            className={`mil-menu-btn ${toggle ? "mil-active" : ""}`}
            onClick={() => setToggle(!toggle)}
          >
            <span />
          </div>
        </div>

      </div>
      {/* top bar end */}

    </>
  );
};
export default DefaultHeader;
