import { Footer } from "../commons/Footer";
import { Menu } from "../commons/Menu";
import { PageFAQDisplayQuestionSection } from "./PageFAQDisplayQuestionSection";
import { PageHomeHeroSection } from "./PageHomeHeroSection";
import { SEOBlock } from "./SEOBlock";

export const cmsSections = {
    PagefaqDisplayquestionSectionRecord: PageFAQDisplayQuestionSection,
    CommonSeoBlockRecord: SEOBlock,
    CommonMenuRecord: (props) => <Menu {...props} />,
    PagehomeHerosectionRecord: PageHomeHeroSection,
    CommonFooterRecord: (props) => <Footer {...props} />,
}
