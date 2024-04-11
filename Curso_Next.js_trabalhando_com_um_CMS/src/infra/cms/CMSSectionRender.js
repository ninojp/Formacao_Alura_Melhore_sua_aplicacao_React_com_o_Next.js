import { cmsSections } from "../../components/cmsSections";
import { getCMSContent } from "./CMSProvider";

export function CMSSectionRender({pageName}){
    // console.log(getCMSContent(`${pageName}.pageContent.section`))
    const sections = getCMSContent(`${pageName}.pageContent.section`)
    return sections.map((sectionProps) => {
        // console.log(sectionProps)
        const Component = cmsSections[sectionProps.componentName];
        const isVisible = sectionProps.visible === true || sectionProps.visible === undefined;
        if(!Component) return null;
        if(!isVisible) return null;
        return (
                <Component key={sectionProps.id} {...sectionProps} />
        )
    })
};
