import { 
    ContainerMotion, Anchor, Container, 
    Span, AsideMotion 
} from "../styles/generalStyle";
import Link from "next/link";
import { useRouter } from "next/router";
import { ButtonLink } from "../components/Button";

export default function SideBar ({ data, open, setOpen }) {

    const router = useRouter();
    const pathName = router.pathname;

    {/** FRAMER MOTION VARIANT FOR SIDEBAR TRANSITION */}
    const variants = {
        opacity: { opacity: [0, 1], transition: { duration: 0.2 } },
        slideIn: { top: [-400, 0], transition: { duration: 0.1, delay: 0.1 } },
    };

    return(
        <ContainerMotion absolute="true" noOpacity={!open} noShow={!open} column="true" aEnd z10="true"
        fullw="true" fit="true" mFlex mmFlex dFlex ddNone shadow="true" style={{ top: "94px", right: "0", left: "0" }}
        onClick={() => setOpen(true)} variants={variants} animate={open ? 'opacity' : {opacity: 0}}>

            <AsideMotion lightbg="true" relative="true" fullh="true" block="true" fullw="true" onClick={() => setOpen(true)}
            variants={variants} noShow={!open} z10="true" animate={open ? 'slideIn' : {top: -400}}>

                <Container block="true" fullw="true" fit="true" mM1b dM1125b>
                    {
                        data.map((data) => (
                        <Link href={data.path} key={data.id} passHref>
                            <Anchor pointer flex aCenter fullw="true" dPd125 mPd0875125 content="true">
                                <Span font3D bold lHeight3 mainFont={pathName === data.path}>
                                    {data.title}
                                </Span>
                            </Anchor>
                        </Link>
                    ))
                    }
                    <Container block="true" fullw="true" dPd125 mPd0875125>
                        <Link href="/login" passHref>
                            <ButtonLink block="true" fullw="true" lHeight1 mainFont whiteBg sFontD>
                                Login
                            </ButtonLink>
                        </Link>
                    </Container>

                    <Container block="true" fullw="true" dPd125 mPd0875125>
                        <Link href="/signup" passHref>
                            <ButtonLink block="true" fullw="true" lHeight1 sFontD>
                                Sign up
                            </ButtonLink>
                        </Link>
                    </Container>
                </Container>
            </AsideMotion>
      </ContainerMotion>
    );
}