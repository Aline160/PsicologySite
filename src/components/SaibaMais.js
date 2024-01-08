import { Container, Col, Row } from "react-bootstrap";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import meter1 from "../assets/imagens/cadeado.png";
import meter2 from "../assets/imagens/microfone3.png";
import meter3 from "../assets/imagens/relogio4.png";
import meter4 from "../assets/imagens/home.png";
import colorSharp from "../assets/imagens/color-sharp.png"

export const SaibaMais = () => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return (
        <section className="saibaMais" id="saibaMais1">
            <Container>
                <Row>
                    <Col>
                    <div className="saibaMais-bx">
                        <h2>
                            Sobre Mim
                        </h2>
                        <p>
                            Sou graduado em psicologia. Minha formação possui ênfase em Psicologia Clínica e Psicologia Social. Estou em constante especialização, e atualmente estou cursando uma pós graduação em Neurociência Clínica.Minha abordagem Terapêutica é a psicanálise, que tem desempenhado um papel significativo no campo da psicoterapia ao longo do tempo. Ela se concentra em explorar o inconsciente, uma parte da mente que contém pensamentos, sentimentos e memórias que estão fora da consciência, permitindo que identifiquemos padrões dos mesmos, pois assim, o paciente pode entender e resolver conflitos internos, quebrando ciclos de comportamentos repetitivos. A abordagem psicanalítica busca a autorreflexão e o autoconhecimento, o que envolve uma análise de relacionamentos e experiências passadas, incluindo a infância, buscando entender como esses eventos passados afetaram seus relacionamentos e comportamentos atuais.
                        </p>
                        <Carousel responsive={responsive} infinite={true} className="saibaMais-slider">
                            <div className="item">
                                <img src={meter1} alt="Cadeado"/>
                                <h5>Sigilo Absoluto</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Microfone"/>
                                <h5>Seu Espaço</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Relogio"/>
                                <h5>Sem Julgamentos</h5>
                            </div>
                            <div className="item">
                                <img src={meter4} alt="Cadeado"/>
                                <h5>Comodidade</h5>
                            </div>
                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt="Ceu estrelado"/>
        </section>
      )

}