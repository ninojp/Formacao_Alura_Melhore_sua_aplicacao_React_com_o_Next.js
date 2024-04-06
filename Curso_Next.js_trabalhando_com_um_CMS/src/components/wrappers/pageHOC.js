import CMSProvider from "../../infra/cms/CMSProvider";

export default function pageHOC(FAQQuestionScreen){
    return function Wrapper(props) {
        return (
            <CMSProvider cmsContent={props.cmsContent}>
                <FAQQuestionScreen {...props} />
            </CMSProvider>
        )
    }
};
