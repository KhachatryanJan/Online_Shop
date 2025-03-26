import { useTranslation } from "react-i18next";
import AvatrName from "./AvatrName"
import "./OurStori.css"
import OurStoriContent from "./OurStoriContent";
function OurStori() {
    const {t}=useTranslation()
    return (
        <>
            <div className="OurStori">
                <h1 className="My-info">{t("Myinformation")}</h1>
                <AvatrName />
                <OurStoriContent/>
            </div>
        </>
    );
}


export default OurStori