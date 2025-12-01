import { FaInstagram, FaLinkedin, FaPinterest, FaYoutube } from "react-icons/fa";

const IconMapper = ({ icon, ...props }) => {
    const iconMap = {
        "fab fa-instagram": FaInstagram,
        "fab fa-linkedin": FaLinkedin,
        "fab fa-pinterest": FaPinterest,
        "fab fa-youtube": FaYoutube,
    };

    const IconComponent = iconMap[icon];

    if (!IconComponent) {
        console.warn(`Icon "${icon}" not found in IconMapper.`);
        return null;
    }

    return <IconComponent {...props} />;
};

export default IconMapper;
