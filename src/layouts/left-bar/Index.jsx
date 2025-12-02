import appData from "@data/app.json";
import IconMapper from "@components/common/IconMapper";

const leftPanelModule = () => {
    return (
        <>
            {/* left bar */}
            <div className="mil-left-panel">

                <div className="mil-page-name mil-upper mil-dark">BecHANGE - Agência de Criação de Sites e Identidade Visual</div>

                <ul className="mil-social-icons">
                    {appData.social.map((item, key) => (
                        <li key={`lp-social-item-${key}`}><a href={item.link} target="_blank" className="social-icon" aria-label={item.title}><IconMapper icon={item.icon} /></a></li>
                    ))}
                </ul>

            </div>
            {/* left bar end */}
        </>
    );
};
export default leftPanelModule;