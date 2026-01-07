import Link from "next/link";
import appData from "@data/app.json";
import aboutData from "@data/sections/about.json";

const DefaultFooter = ({ extraClass }) => {
  return (
    <>
      {/* footer */}
      <footer className="mil-fw mil-text-center-mobile" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 0', flexWrap: 'wrap', gap: '15px' }}>
        {/* Selos à esquerda */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {aboutData.logos.map((logo, index) => (
            <div
              key={index}
              style={{
                width: '59px',
                height: '59px',
                borderRadius: '50%',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#fff'
              }}
            >
              <img
                src={logo.image}
                alt={logo.alt}
                style={{ height: '40px', width: 'auto', opacity: 0.7 }}
              />
            </div>
          ))}
        </div>

        {/* Copyright e CNPJ à direita */}
        <div className="mil-footer-text" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '5px' }}>
          <p className="mil-light-soft" style={{ margin: 0 }} dangerouslySetInnerHTML={{ __html: appData.footer.copy }} />
          <p className="mil-light-soft" style={{ margin: 0 }} dangerouslySetInnerHTML={{ __html: appData.footer.dev }} />
        </div>
      </footer>
      {/* footer end */}
    </>
  );
};
export default DefaultFooter;
