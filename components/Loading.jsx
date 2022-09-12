import { Container } from "../styles/generalStyle";
import Image from "next/image";

export default function Loader() {
    return(
        <Container flex fullh jCenter fullw lightBg>
            <Container fullw fullh flex column jCenter aCenter lightBg>
                <Image src="/spinner55.svg"  alt="" height={45} width={45} />
            </Container>
        </Container>
    );
}