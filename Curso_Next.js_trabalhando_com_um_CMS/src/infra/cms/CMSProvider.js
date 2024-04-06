import { get } from "lodash";
import { createContext, useContext } from "react";

const CMSContext = createContext({
    cmsContent: {}
});

export const getCMSContent = (path='') => {
    const cmsContent = useContext(CMSContext).cmsContent;
    if(path === '') return cmsContent;
    const output = get(cmsContent, path);
    if(!output) throw new Error(`Não foi possivel encontrar a chave'Path': "${path}". Reveja sua Query e tente novamente`);
    return output;
};

export default function CMSProvider({cmsContent, children}){
    return (
        <CMSContext.Provider value={{cmsContent}}>
            {children}
        </CMSContext.Provider>
    )
}
