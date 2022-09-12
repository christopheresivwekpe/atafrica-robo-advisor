import { useState } from "react";
import { useRouter } from "next/router";
import { navData } from "../data";
import { Nav, Container, Anchor } from "../styles/generalStyle";
import Link from "next/link";
import { ButtonLink } from "./Button";
import SideBar from "./SideBar";
import Image from "next/image";
import Hamburger from "./Hamburger";

export default function NavBar() {

  const [open, setOpen] = useState(false);
  const router = useRouter();
  const pathName = router.pathname;

  return(
    <>
      <Nav flex primaryBG={!open} lightbg={open} fullw="true" jBetween z100="true" fit="true" trans mPd1 dPd12525>
        <Container flex fullw="true" aCenter jBetween>

          {/** ROBOADVISOR ICON FOR MOBILE SCREENS */}
          <Link href="/" passHref style={{ cursor: "pointer", display: "inline-block" }}>
            <Anchor mFlex mmNone dNone ddNone>
              <Image src="/icon.svg" height={64} width={60} alt="" />
            </Anchor>
          </Link>

          {/** ROBOADVISOR ICON FOR LAPTOP SCREENS */}
          <Link href="/" passHref style={{ cursor: "pointer", display: "inline-block" }}>
            <Anchor mNone mmFlex dFlex ddFlex>
              <Image src="/icon.svg" height={67} width={63} alt="" />
            </Anchor>
          </Link>

          {/** HAMBURGER MENU FOR MOBILE, IPAD AND TABLET */}
          <Container mFlex mmFlex dFlex aCenter relative ddNone>
            <Hamburger toggle={() => setOpen(!open)} open={open} />
          </Container>

          {/** NAV MENU FOR LAPTOP */}
          <Container mNone mmNone dNone ddFlex aCenter>
            <Container flex aCenter>
              {
                navData.map((data) => (
                  <Link href={data.path} key={data.id} passHref>
                    <Anchor pointer dPd1375rl bold font2D font2M mainFont={pathName === data.path}>
                      {data.title}
                    </Anchor>
                  </Link>
                ))
              }
            </Container>
          </Container>

          <Container mNone mmNone dNone ddFlex aCenter>
            <Container inline dM0875r>
              <Link href="/login" passHref>
                <ButtonLink lHeight1 pd1 mainFont grayBg sFontD>
                    Login
                </ButtonLink>
              </Link>
            </Container>

            <Container inline>
              <Link href="/signup" passHref>
                <ButtonLink lHeight1 pd1 sFontD>
                    Sign up
                </ButtonLink>
              </Link>
            </Container>
          </Container>
        </Container>
      </Nav>

      {/** MOBILE, IPAD AND TABLET SIDEBAR COMPONENT */}
      <SideBar data={navData} setOpen={() => setOpen()} open={open} />
    </>
  );
}