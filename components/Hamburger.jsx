import { Menu, FirstLine, SecondLine, ThirdLine, FourthLine } from "../styles/hamburger";

export default function Hamburger({ toggle, open }) {
  return(
    <Menu onClick={() => toggle()}>
      <FirstLine open={open}></FirstLine>
      <SecondLine open={open}></SecondLine>
      <ThirdLine open={open}></ThirdLine>
      <FourthLine open={open}></FourthLine>
    </Menu>
  );
}
