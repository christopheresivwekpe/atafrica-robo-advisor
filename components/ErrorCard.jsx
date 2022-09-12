import { Container, Section, H3 } from "../styles/generalStyle";
import { Button } from "../components/Button";
import { useRouter } from "next/router";

export default function ErrorCard({ error }) {
    const router = useRouter();
    return(
        <Section block fullw fullh lightbg>
            <Container fullw fullh flex column jCenter aCenter lightbg>
                <Container flex column aCenter jCenter fullw>
                    <H3 block center mM05b bold700 dM05b fullw lHeight2 font4M font4D>
                        Something Went Wrong
                    </H3>
                    <Container center block lHeight2 fullW mM05b dM0625b>
                      {error}
                    </Container>
                    <Button inline lHeight2 mainFont whiteBg sFontD 
                    sFontM onClick={()=> router.reload()}>
                        Refresh
                    </Button>
                </Container>
            </Container>
        </Section>
    );
}