import { Container, Row, Col, Nav,Tab } from "react-bootstrap"

export const Depoimentos = ()=>{
    const depoimentos = [
        {
            title:"T.B. – GO",
            description:"“O meu acompanhamento com a Jéssica Michel tem sido excelente. Me faz muito bem ter alguém que me faz refletir sobre comportamentos, acontecimentos e conseguir notar todo avanço que tenho tido.”",
            imgUrl:"",
        },
        {
            title:"I.F.L.– SP",
            description:"“Excelente profissional, me sinto à vontade para falar sobre qualquer tema, sempre saio de uma sessão melhor do que quando entrei, agradeço muito.”",
            imgUrl:"",
        },
        {
            title:"N.L.R. – SP",
            description:"“Excelente profissional, me sinto à vontade para falar sobre qualquer tema, sempre saio de uma sessão melhor do que quando entrei, agradeço muito.”",
            imgUrl:"",
        },
        {
            title:"T.B. – GO",
            description:"“O meu acompanhamento com a Jéssica Michel tem sido excelente. Me faz muito bem ter alguém que me faz refletir sobre comportamentos, acontecimentos e conseguir notar todo avanço que tenho tido.”",
            imgUrl:"",
        },
    ];

    return (
        <section className="depoimentos" id="depoimentos">
            <Container>
                <Row>
                    <Col>
                        <h2>Depoimentos</h2>
                        <p>Sabe aquela situação na sua vida que sempre se repete não importa o que você faça? Pois então, é possível através do tratamento psicológico parar essa repetição. É preciso ressignificar situações que lhe trazem dor, e quebrar ciclos repetitivos.</p>
                        <Tab.Container id="depoimentos-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                            <Nav.Link eventKey="first">Tabela 1</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="second">Tabela 2</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="third">Tabela 3</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                        <Tab.Pane eventKey="first">
    <Row>
        {depoimentos.map((depoimento, index) => (
            <Col key={index} md={6} style={{ marginBottom: '20px' }}>
                <p>{depoimento.title}</p>
                <p>{depoimento.description}</p>
            </Col>
        ))}
    </Row>
</Tab.Pane>



                            <Tab.Pane eventKey="second">Os atendimentos presenciais são realizados em Recife-Pernambuco</Tab.Pane>
                            <Tab.Pane eventKey="third">Teste2</Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}