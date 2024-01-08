import { useState } from "react"
import { Col, Container, Row } from "react-bootstrap";
import contactImg from "../assets/imagens/contact-img.svg";


export const Contact =()=>{
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        message: ''
      }
      const [formDetails, setFormDetails] = useState(formInitialDetails);
      const [buttonText, setButtonText] = useState('Enviar');
      const [status, setStatus] = useState({});
    
      const onFormUpdate = (category, value) => {
          setFormDetails({
            ...formDetails,
            [category]: value
          })
      }
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText("Sending...");
        let response = await fetch("http://localhost:2525/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify(formDetails),
        });
        setButtonText("Enviar");
        let result = await response.json();
        setFormDetails(formInitialDetails);
        if (result.code == 200) {
          setStatus({ succes: true, message: 'Message sent successfully'});
        } else {
          setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
        }
      };    

    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={contactImg} alt="contact"/>
                    </Col>
                    <Col md={6}>
                        <h2>Contato</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.firstName} placeholder="Primeiro Nome" onChange={(e)=>onFormUpdate('firstName', e.target.value)}/>
                                </Col>
                                <Col sm={6} className="px-1">
                                <input type="text" value={formDetails.lastName} placeholder="Sobrenome" onChange={(e)=>onFormUpdate('lastName', e.target.value)}/>
                                </Col>
                                <Col sm={6} className="px-1">
                                <input type="email" value={formDetails.email} placeholder="Email" onChange={(e)=>onFormUpdate('email', e.target.value)}/>
                                </Col>
                                <Col sm={6} className="px-1">
                                <input type="tel" value={formDetails.phoneNumber} placeholder="Telefone" onChange={(e)=>onFormUpdate('phoneNumber', e.target.value)}/>
                                </Col>
                                <Col>
                                <textarea row="6" value={formDetails.message} placeholder="Mensagem"  onChange={(e)=>onFormUpdate('message', e.target.value)}/>
                                <button type="submit"><span>{buttonText}</span></button>
                                </Col>
                            </Row>
                        </form>
                    </Col>
                    {
                        status.message &&
                        <Col>
                        <p className={status.success === false ? "danger" :"success"}>{status.message}</p>
                        </Col>
                    }
                </Row>
            </Container>

        </section>
    )
}