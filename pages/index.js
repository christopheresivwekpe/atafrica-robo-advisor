import { useState } from "react";
import NavBar from "../components/NavBar";
import Link from "next/link";
import ErrorCard from "../components/ErrorCard";
import Loading from "../components/Loading";
import { getError } from "../utils/error";
import { Chart, Tooltip, Title, ArcElement, Legend } from "chart.js";
import { Doughnut } from 'react-chartjs-2';
import { whyData, stepData } from "../data";
import { AiOutlineArrowRight } from "react-icons/ai";
import { ButtonLink } from "../components/Button";
import { deco1Bg, deco2Bg, deco3Bg, deco4Bg, deco5Bg, deco6Bg, deco7Bg, deco8Bg,
    deco9Bg, deco10Bg } from "../styles/props";
import { Container, Header, Span, H1, H2, H3, NextImage, ContainerMotion,
    Img, Section } from "../styles/generalStyle";
import useSWR from "swr";
import { BiChevronDown } from "react-icons/bi";
import { riskScoreData } from "../data";


/** CHART REGISTERING FOR CHART.JS */
Chart.register(
    Tooltip, Title, ArcElement, Legend
);


export default function LandingPage() {

    const [riskScore, setRiskScore] = useState(0);
    const [toggleRiskScore, setToggleRiskScore] = useState(false);

    const url = `https://atafrica-backend.herokuapp.com/api/portfolio/`;
    const { data, error } = useSWR ([url]);

    const dt = !data ? {} : data.data.find(x => x.riskScore === riskScore);

    /** DOUGHNUT CHART DATA */
    const portfolioData = {
        labels: [
            'Nigerian Stocks',
            'Foriegn Stocks',
            'Tech Stocks',
            'Emerging Stocks',
            'Nigerian Bonds',
            'Foriegn Bonds',
            'Commodities',
            'Real Estate',
            'T-Bills',
            'Alternative'
        ],
        datasets: [{
        label: 'Portfolio Dataset',
        data: [
            dt.nigeriaStocks, 
            dt.foriegnStocks, 
            dt.techStocks, 
            dt.emergingStocks, 
            dt.nigeriaBonds, 
            dt.foriegnBonds, 
            dt.commodities,
            dt.realEstate,
            dt.tBills,
            dt.alternative
        ],
        backgroundColor: [
            deco1Bg,
            deco2Bg,
            deco3Bg,
            deco4Bg,
            deco5Bg,
            deco6Bg,
            deco7Bg,
            deco8Bg,
            deco9Bg,
            deco10Bg
        ],
        hoverOffset: 4
        }]
    };

    const portfolios = data;

    return(
        <Section block="true" fullw="true" hideX absolute="true" left0 top0>

            {/** HEADER COMPONENTS */}
            <Header fit="true" fullw="true" flex column="true" aCenter ligthBG relative="true" z2>

                <NavBar />

                <Container fullw="true" block="true" primaryBG fit="true" relative="true">
                    <Container fullw="true" flex jCenter dM118PXtb mM90PXtb>
                        <H1 headingW block="true" fit="true" lHeight5 center font12M font15MM font16D 
                        font22DD mPd15rl lighter>
                            A Smarter way&#160;
                            <Span mNone mmNone dNone inline middle>
                                <NextImage src="/icon.svg" height={57} width={53} alt="" />
                            </Span>
                            <Span ddNone mmNone mNone inline middle>
                                <NextImage src="/icon.svg" height={50} width={46} alt="" />
                            </Span>
                            <Span ddNone dNone mNone inline middle>
                                <NextImage src="/icon.svg" height={47} width={43} alt="" />
                            </Span>
                            <Span dNone mmNone ddNone inline middle>
                                <NextImage src="/icon.svg" height={44} width={40} alt="" />
                            </Span>
                            &#160;to&#160;
                            <Span lHeight5 font12M font15MM font16D font22DD bold800>
                                invest and save
                            </Span>&#160;
                            for the future.
                        </H1>
                    </Container>

                    <Container ddFlex dFlex mmBlock mBlock fullw="true" fit="true" dPd4l ddPd5l dddPd8l>
                        <Container block="true" fit="true" subHeadW mPd15rl mM15b mmM165b dM254br>
                            <Container block="true" fullw="true" fit="true" lHeight5 font4M font6D mM3b dM4b>
                                Make your money work for you by investing in personalized long term portfolios.
                                Optimize your investing story with RoboAdvisor.
                            </Container>
                            <Container block="true" fullw>
                                <Link href="/" passHref>
                                    <ButtonLink lHeight2 sFontD>
                                        Get Started&#160;
                                        <Span lightFont font4D>
                                            <AiOutlineArrowRight />
                                        </Span>
                                    </ButtonLink>
                                </Link>
                            </Container>
                        </Container>

                        <Container block="true" mPd15rl fit="true" mFullW noWrap mScroll dHide absolute="true" mLeft0 
                        mBottom_192PX mmLeft450PX mmBottom_150PX ddBottom_255PX ddLeft500PX>

                            <Container inlineflex aEnd BgImage1 BgPos1 BgSz1 BgRepeat1 image1H 
                            relative="true" image1W mFullW tenRadius>
                                <Section flex aEnd jBetween fiveRadius fullw="true" dPd225rl mPd15rl absolute="true" bottom12>
                                    <Container block>
                                        <Container block="true" lightFont lHeight2 bold600 font12DD font8D font10M>
                                            Invest<br />Safely
                                        </Container>
                                        <Container block="true" lightFont lHeight4 font2DD font1D font2M>
                                        &quot;RoboAdvisor&quot;
                                        </Container>
                                    </Container>

                                    <Container flex column="true" aCenter>
                                        <Container block="true" lightFont bold600 font30DD font20D font22M lHeight53px>
                                            3
                                        </Container>
                                        <Container block="true" lightFont font5D lHeight5 font2D font3DD font3M>
                                            Years
                                        </Container>
                                    </Container>
                                </Section>
                            </Container>
                        </Container>
                    </Container>
                </Container>
            </Header>



            {/** SECTION 1 */}
            <Section block="true" fullw="true" mPd3515 dPd4 darkBG fit="true" ddM2425t dM15625t mmM19t 
            mM17375t dddPd684 ddPd45 relative="true">
                <Container block="true" fit="true" mM15b mmM10b dddM19b ddM15b dM12b>
                    <H2 block="true" fullw="true" fit="true" lHeight2 bold font12M font17MM font18D 
                    font24DD mM3b dM4b lightFont>
                        Maximize Returns. <br />
                        Minimize Taxes. <br />
                        Manage Risk. <br />
                    </H2>
                    <Container block="true" fullw>
                        <Link href="/" passHref>
                            <ButtonLink lHeight2 sFontD>
                                Join RoboAdvisor Today&#160;
                                <Span lightFont font4D>
                                    <AiOutlineArrowRight />
                                </Span>
                            </ButtonLink>
                        </Link>
                    </Container>
                </Container>

                <Container flex aEnd fullw="true" absolute="true" mmLeft15 ddBottom_110PX 
                mmBottom_80PX hide mmmBottom_60PX mBottom_80PX>
                    <Container flex aEnd image3H image3W>
                        <Img src="/piggybank-sK-ziQvKGsk-unsplash (1) (1).jpg" fullw="true" fullh="true" alt="" />
                    </Container>
                    <Container block="true" deco1BG fit="true" fiveRadius>
                        <Container block="true" fullw="true" dddPd87PX ddPd72PX 
                        dPd43PX mmPd43PX mPd43PX BgImage4>
                            <Container block="true" bold600 lHeight0 
                            font100DDD font19M font36D font98DD>
                                15%
                            </Container>
                            <Container block="true" font4M bold lHeight1 
                            font2M font3D font4DD font6DDD>
                                US direct indexing
                            </Container>
                        </Container>
                        <Container block="true" fullw="true" dddPd32PX ddPd27PX 
                        dPd30PX mmPd30PX mPd30PX BgImage4>
                            <Container block="true" bold600 lHeight0 
                            font100DDD font19M font36D font98DD>
                                10%
                            </Container>
                            <Container block="true" font4M bold lHeight1 
                            font2M font3D font4DD font6DDD>
                                Emerging markets
                            </Container>
                        </Container>
                        <Container block="true" fullw="true" dddPd61PX 
                        dPd16PX ddPd51PX mmPd16PX mPd16PX>
                            <Container block="true" bold600 lHeight0 
                            font100DDD font19M font36D font98DD>
                                4%
                            </Container>
                            <Container block="true" font4M bold 
                            lHeight1 font2M font3D font4DD font6DDD>
                                Bitcoin trust
                            </Container>
                        </Container>
                    </Container>
                </Container>
            </Section>



            {/** SECTION 2 */}
            <Section flex column="true" aCenter fullw="true" lightbg="true" fit="true" ddM17t dM12t mmM11t mM11t>
                <H2 block="true" bold600 center lHeight2 font14D font10M font11MM mM2b dM225b>
                    Why choose&#160;
                    <Span mNone mmNone inline middle>
                        <NextImage src="/icon.svg" height={53} width={49} alt="" />
                    </Span>
                    <Span dNone ddNone inline middle>
                        <NextImage src="/icon.svg" height={42} width={38} alt="" />
                    </Span>RoboAdvisor?
                </H2>
                <Container block="true" center text1W lHeight6 font7D 
                font5M font6MM mPd15rl mM3b dM4b>
                    Roboadvisor takes away the hassle of managing your investments. 
                    Focus on what really matters and let your money work for you.
                </Container>
                <Container flex fWrap jCenter fullw>
                    <Container flex fWrap jCenter fit="true" mM1625l dM1625l>
                        {
                        whyData.map((data) => (
                            <Container flex fWrap key={data.id} jCenter fit="true">
                                <Container block="true" text2W text2H primaryBG fiveRadius 
                                mPd40PX dPd40PX mM1625rb dM1625rb>
                                    <Container darkFont block="true" bold600 fullw="true" 
                                    font9D font7M font8MM mM175b dM1875b>
                                        {data.title1}
                                    </Container>
                                    <Container darkFont block="true" fullw="true" font3M fontMM 
                                    font4D lHeight6>
                                        {data.body1}
                                    </Container>
                                </Container>

                                <Container block="true" text2W text2H primaryBG fiveRadius 
                                mPd40PX dPd40PX mM1625rb dM1625rb>
                                    <Container darkFont block="true" bold600 fullw="true" font9D 
                                    font7M font8MM mM175b dM1875b>
                                        {data.title2}
                                    </Container>
                                    <Container darkFont block="true" fullw="true" font3M fontMM font4D lHeight6>
                                        {data.body2}
                                    </Container>
                                </Container>
                            </Container>
                        ))
                        }
                    </Container>
                </Container>
            </Section>



            {/** SECTION 3 */}
            <Section flex column="true" fullw="true" lightbg="true" fit="true" ddM11t dM10t mmM8t mM6t>
                <Container block="true" fullw="true" fit="true" mPd15rl dPd4l ddPd5l dddPd8l dM2b mM1_5b mmM3b>
                    <H2 block="true" full lHeight3 font12M font17MM font18D font24DD dM4b>
                    Smarter investing,&#160;
                        <Span mNone mmNone dNone inline middle>
                            <NextImage src="/icon.svg" height={82} width={77} alt="" />
                        </Span>
                        <Span ddNone mmNone mNone inline middle>
                            <NextImage src="/icon.svg" height={57} width={53} alt="" />
                        </Span>
                        <Span ddNone dNone mNone inline middle>
                            <NextImage src="/icon.svg" height={50} width={46} alt="" />
                        </Span>
                        <Span dNone mmNone ddNone inline middle>
                            <NextImage src="/icon.svg" height={47} width={43} alt="" />
                        </Span>
                        &#160;well personalized.
                    </H2>
                </Container>
                <Container mBlock mmBlock fit="true" dFlex ddFlex fullw="true" mPd15rl dPd4l ddPd5l dddPd8l>
                    <Container block="true" text3W fit="true" mM4b ddM0875r dddM0>
                        <H3 block="true" fullw="true" fit="true" bold600 font5M font6MM font8DD font7D lHeight4 mM05b 
                        dM41tb dddM915tb ddM615tb>
                            <Span mNone mmNone inline middle>
                                <NextImage src="/icon.svg" height={52} width={50} alt="" />
                            </Span>
                            <Span mNone ddNone dNone inline middle>
                                <NextImage src="/icon.svg" height={40} width={38} alt="" />
                            </Span>
                            <Span ddNone mmNone dNone inline middle>
                                <NextImage src="/icon.svg" height={37} width={36} alt="" />
                            </Span>&#160;
                            Portfolio
                        </H3>
                        <Container block="true" fullw="true" font6DD font5D font5MM font4M lHeight5 mM3b fit="true" dM4b>
                            Just answer a few questions, and we’ll build you a personalized portfolio of wonderfully diversified, 
                            low-cost index funds designed to grow your wealth for the long term. 
                        </Container>
                        <Link href="/" passHref>
                            <ButtonLink lHeight2 sFontD pd2>
                                Get Started&#160;
                                <Span lightFont font4D>
                                    <AiOutlineArrowRight />
                                </Span>
                            </ButtonLink>
                        </Link>
                    </Container>
                    <Container block="true" dPd32625 dM4l mPd2875225 tenRadius fullh dashed box5w>
                        {
                        error ? <ErrorCard error={getError(error)} /> :
                        !data ? <Loading /> :
                        <>
                            <Container flex fullw mM2b dM4b>
                                <Container font5M font6D blackFont block bold700>Risk Tolerance:&#160;</Container>
                                <Container flex aCenter font4 lHeight3 relative>
                                    <Container flex aCenter jBetween bold700 fullB tenRadius mPd0625rl dPd075lr image9W font5M font6D pointer
                                    onClick={() => setToggleRiskScore(!toggleRiskScore)}>
                                        { riskScore }&#160;
                                        <Span font5M font6D pointer><BiChevronDown /></Span>
                                    </Container>

                                    {/* RISKSCORE DROP DOWN */}
                                    {
                                        toggleRiskScore &&
                                        <ContainerMotion absolute block top25 right0 dPd075 mPd05 shadow lightbg fiveRadius
                                        initial={{ opacity: 0, translateY: -20 }}z10 image9W 
                                        animate={{ opacity: 1, translateY: 0, transition: { duration: 0.3 } }}>
                                        {
                                            riskScoreData.map((data) => (
                                                <Container key={data} font2D font1M fullw dPd05075 mPd05 block pointer
                                                secondaryBG={data === riskScore} lightFont={data === riskScore} 
                                                onClick={() => { setRiskScore(data); setToggleRiskScore(!toggleRiskScore) }}>
                                                    {data}
                                                </Container>
                                            ))
                                        }
                                        </ContainerMotion>
                                    }
                                </Container>
                            </Container>
                
                            <Container mBlock mmBlock fit="true" dFlex ddFlex jBetween fullw>
                                <Container flex column jCenter aCenter box9w mM2b>
                                    <Doughnut data={portfolioData} />
                                </Container>
                                <Container flex column box9w>
                                    <Container flex aCenter mM1b dM15b jBetween>
                                        <Container flex aCenter>
                                            <Span halfRadius deco1BG box6h box6w></Span>
                                            <Span mM075l dM075l font4D font4M >Nigerian Stocks</Span>
                                        </Container>
                                        <Container block bold700 font4D font4M>{dt.nigeriaStocks}%</Container>
                                    </Container>

                                    <Container flex aCenter mM1b dM15b jBetween>
                                        <Container flex aCenter>
                                            <Span halfRadius deco2BG box6h box6w></Span>
                                            <Span mM075l dM075l font4D font4M >Foriegn Stocks</Span>
                                        </Container>
                                        <Container block bold700 font4D font4M>{dt.foriegnStocks}%</Container>
                                    </Container>

                                    <Container flex aCenter mM1b dM15b jBetween>
                                        <Container flex aCenter>
                                            <Span halfRadius deco3BG box6h box6w></Span>
                                            <Span mM075l dM075l font4D font4M >Tech Stocks</Span>
                                        </Container>
                                        <Container block bold700 font4D font4M>{dt.techStocks}%</Container>
                                    </Container>

                                    <Container flex aCenter mM1b dM15b jBetween>
                                        <Container flex aCenter>
                                            <Span halfRadius deco4BG box6h box6w></Span>
                                            <Span mM075l dM075l font4D font4M >Emerging Stocks</Span>
                                        </Container>
                                        <Container block bold700 font4D font4M>{dt.emergingStocks}%</Container>
                                    </Container>

                                    <Container flex aCenter mM1b dM15b jBetween>
                                        <Container flex aCenter>
                                            <Span halfRadius deco5BG box6h box6w></Span>
                                            <Span mM075l dM075l font4D font4M >Nigerian Bonds</Span>
                                        </Container>
                                        <Container block bold700 font4D font4M>{dt.nigeriaBonds}%</Container>
                                    </Container>

                                    <Container flex aCenter mM1b dM15b jBetween>
                                        <Container flex aCenter>
                                            <Span halfRadius deco6BG box6h box6w></Span>
                                            <Span mM075l dM075l font4D font4M >Foriegn Bonds</Span>
                                        </Container>
                                        <Container block bold700 font4D font4M>{dt.foriegnBonds}%</Container>
                                    </Container>

                                    <Container flex aCenter mM1b dM15b jBetween>
                                        <Container flex aCenter>
                                            <Span halfRadius deco7BG box6h box6w></Span>
                                            <Span mM075l dM075l font4D font4M >Commodities</Span>
                                        </Container>
                                        <Container block bold700 font4D font4M>{dt.commodities}%</Container>
                                    </Container>

                                    <Container flex aCenter mM1b dM15b jBetween>
                                        <Container flex aCenter>
                                            <Span halfRadius deco8BG box6h box6w></Span>
                                            <Span mM075l dM075l font4D font4M >Real Estate</Span>
                                        </Container>
                                        <Container block bold700 font4D font4M>{dt.realEstate}%</Container>
                                    </Container>

                                    <Container flex aCenter mM1b dM15b jBetween>
                                        <Container flex aCenter>
                                            <Span halfRadius deco9BG box6h box6w></Span>
                                            <Span mM075l dM075l font4D font4M >T-Bills</Span>
                                        </Container>
                                        <Container block bold700 font4D font4M>{dt.tBills}%</Container>
                                    </Container>

                                    <Container flex aCenter jBetween>
                                        <Container flex aCenter>
                                            <Span halfRadius deco10BG box6h box6w></Span>
                                            <Span mM075l dM075l font4D font4M >Alternative</Span>
                                        </Container>
                                        <Container block bold700 font4D font4M>{dt.alternative}%</Container>
                                    </Container>
                                </Container>
                            </Container>
                        </>
                        }
                    </Container>
                </Container>
            </Section>


            {/** SECTION 5 */}
            <Section flex column="true" aCenter lightbg="true" fullw="true" ddM11t dM10t mmM8t mM6t fit="true">
                <Container block="true" fullw="true" fit="true" mPd15rl dPd4r ddPd5r dddPd8r dM2b mM1_5b mmM3b>
                    <H2 mBlock dFlex ddFlex full dJEnd lHeight3 font12M font17MM font18D font24DD>
                        Put&#160;
                        <Span mNone mmNone dNone inline middle>
                            <NextImage src="/icon.svg" height={82} width={77} alt="" />
                        </Span>
                        <Span ddNone mmNone mNone inline middle>
                            <NextImage src="/icon.svg" height={57} width={53} alt="" />
                        </Span>
                        <Span ddNone dNone mNone inline middle>
                            <NextImage src="/icon.svg" height={50} width={46} alt="" />
                        </Span>
                        <Span dNone mmNone ddNone inline middle>
                            <NextImage src="/icon.svg" height={47} width={43} alt="" />
                        </Span>
                        &#160;your money on autopilot
                    </H2>
                </Container>
                <Container flex fit="true" fullw="true" jEnd aEnd mPd15rl mRColumn
                dPd4r ddPd5r dddPd8r>
                    <Container block="true" tenRadius dM1875rl image6H image5W>
                        <Img src="/jamie-street-VP4WmibxvcY-unsplash (1) (1).jpg" tenRadius alt="" fullw="true" fullh="true" />
                    </Container>
                    <Container block="true" text3W fit="true" mM2b dM075l ddM075l>
                        <H3 block="true" fullw="true" fit="true" bold600 font5M font6MM font8DD font7D lHeight4 mM05b 
                        dM41tb dddM915tb ddM615tb>
                            <Span mNone mmNone inline middle>
                                <NextImage src="/icon.svg" height={52} width={50} alt="" />
                            </Span>
                            <Span mNone ddNone dNone inline middle>
                                <NextImage src="/icon.svg" height={40} width={38} alt="" />
                            </Span>
                            <Span ddNone mmNone dNone inline middle>
                                <NextImage src="/icon.svg" height={37} width={36} alt="" />
                            </Span>&#160;
                            Automation
                        </H3>
                        <Container block="true" fullw="true" mM3b fit="true" dM225b>
                            <Container block="true" fullw="true" mM1_5b dM15b font6DD font5D font5MM font4M lHeight4 fit="true">
                                Automatic deposits, rebalancing, and dividend reinvestment make sure your money is working hard, 
                                even when you’re not looking.
                            </Container>
                            <Span inline font6DD font5D font5MM font4M lHeight4 bold>
                                Automatic Investment. <br />Less Risk.
                            </Span>
                        </Container>
                        <Link href="/" passHref>
                            <ButtonLink lHeight2 pd2 sFontD>
                                Get Started&#160;
                                <Span lightFont font4D>
                                    <AiOutlineArrowRight />
                                </Span>
                            </ButtonLink>
                        </Link>
                    </Container>
                </Container>
            </Section>



            {/** SECTION 6 */}
            <Section block="true" fullw="true" lightbg="true" mPd415 dddPd16810 ddPd1058 dPd944 fit="true">
                <Container flex column="true" aCenter darkBG fullw="true" dddPd46885313 ddPd3753 fit="true"
                dPd3753 mmPd3753 mPd3753>
                    <Container lightFont block="true" text4W lHeight3 center font15D font17DD font14MM 
                    font10M dM4b mmM3b mM2b>
                        Set your money in motion.
                    </Container>
                    <Container flex deco2BG text5W text5H lHeight aCenter jCenter 
                    font6DD font5D font5MM bold fiveRadius dM5b mmM4b mM3b>
                        Get started in 3 easy steps
                    </Container>
                    <Container mBlock mmBlock dFlex ddFlex jBetween aCenter fullw>
                        {
                            stepData.map((data) => (
                                <Container key={data.id} flex aCenter fit="true" mmM15b mM1_5b>
                                    <Container flex aCenter jCenter text7W text7H halfRadius 
                                    font13DDD font11D font10MM font8M lightFont
                                    style={{ border: `1px solid ${data.color}`}}>
                                        {data.id}
                                    </Container>
                                    
                                    <Container block="true" font6DDD font4DD font4D font5MM font4M 
                                    lightFont lHeight5 fit="true" text6W={data.id === 1} text8W={data.id === 2} 
                                    text9W={data.id === 3} dddM1125l dM075l mmM0875l mM075l>
                                        {data.body}
                                    </Container>
                                </Container>
                            ))
                        }
                    </Container>
                </Container>
            </Section>
        </Section>
    );
}