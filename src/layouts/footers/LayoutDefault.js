import Link from "next/link";
import appData from "@data/app.json";

const DefaultFooter = ({ extraClass }) => {
  return (
    <>
      {/* footer */}
      <footer className="mil-fw mil-text-center-mobile">
        <p className="mil-light-soft" dangerouslySetInnerHTML={{ __html: appData.footer.copy }} />
        <p className="mil-light-soft" dangerouslySetInnerHTML={{ __html: appData.footer.dev }} />
      </footer>
      {/* footer end */}
    </>
  );
};
export default DefaultFooter;
