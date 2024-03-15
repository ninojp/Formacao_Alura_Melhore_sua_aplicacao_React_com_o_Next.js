import LinkNext from "next/link";

export default function NextLink({children, href, target, ...props}) {
    return(
        <LinkNext href={href} target={target} passHref legacyBehavior>
            {children}
        </LinkNext >
    );
};
