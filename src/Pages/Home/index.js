import { Button, ButtonContact } from '../../components/Button'
import { Title, TitleDark, TitleDescription } from '../../components/Titles'
import { SectionAbout } from '../../components/About'
import { Paragraph } from '../../components/Paragraph'
import { Badge, BadgeTitle } from '../../components/Badge'
import { Subtitle, SubtitleItalic } from '../../components/Subtitle'
import { Card } from '../../components/Card'

import Toggle from '../../components/Toggle'
import hero from '../../assets/capa.png'
import mac from '../../assets/mac.png'
import iphone from '../../assets/iPhoneX.png'
import petfood from '../../assets/petfood.png'
import saoquadrado from '../../assets/saoquadrado.png'

import './styles.css'
import '../../styles/global.css'

export function Home() {
  return (
    <main>
      <section className="hero">
        <div>
          <h1>Lincoln Modesto</h1>
          <TitleDescription children="Desenvolvedor Front-end/Mobile" />
          <ButtonContact type="button" children="ENTRE EM CONTATO" />
        </div>
        <img src={hero} alt="hero" />
      </section>

      <section className="effects">
        <div className="container-toggle">
          <TitleDark children="Dark Mode" />
          <Toggle />
        </div>
        <div className="container-clock-location">
          <small>Localização:</small>
          <h4>Estância/SE 09:30 AM</h4>
          <div>
            <div></div>
            <h6>Trabalhando agora</h6>
          </div>
        </div>
      </section>

      <SectionAbout>
        <Title children="Sobre" />
        <div className="about">
          <div></div>
          <Paragraph children={`Olá 👋, sou o Lincoln.
            Sou graduado em Engenharia civil e durante a conclusão do meu curso, desenvolvi o aplicativo móvel (Java e Android nativo) Reescore Lajes registrado junto ao INPI, que é um software voltado a sanar problemas de dimensionamento e projeto das estruturas provisórias de escoramento de lajes maciças e treliçadas.          
            A partir daí, me apaixonei por tecnologia e programação, e venho estudando e fazendo pequenos projetos desde 2020.
            🚀 Atualmente estou estudando: JavaScript, React JS e React Native, mas também tenho me aventurado em desenvolver aplicações completas, com back-end em node js, e banco de dados com MongoDB e Postgress.`} />
        </div>
      </SectionAbout>

      <section className="container">
        <Title children="UX/UI" />
        <div className="ux-container">

          <div>
            <img src={mac} alt="pc" />
            <Badge>
              <BadgeTitle children="FIGMA" />
            </Badge>
            <SubtitleItalic children="User Interface" />
            <Subtitle children="Protótipo de alta fidelidade web" />
          </div>

          <div>
            <img src={iphone} alt="pc" />
            <Badge>
              <BadgeTitle children="FIGMA" />
            </Badge>
            <SubtitleItalic children="User Interface" />
            <Subtitle children="Protótipo de alta fidelidade mobile" />
          </div>
        </div>

        <div className="ux-button">
          <Button children="VER MAIS" />
        </div>
      </section>

      <section className="container">
        <Title children="Projetos" />
        <div className="projetosContainer">
          <Card>
            <img src={petfood} alt="petfood" />
            <div className="content">
              <TitleDescription children="PETFOOD" />
              <div className="container-badges">
                <Badge>
                  <BadgeTitle children="REACT JS" />
                </Badge>
                <Badge>
                  <BadgeTitle children="REDUX" />
                </Badge>
                <Badge>
                  <BadgeTitle children="NODE JS" />
                </Badge>
                <Badge>
                  <BadgeTitle children="MONGODB" />
                </Badge>
              </div>
              <Paragraph
                children="Marketplace de petshops com split de pagamentos do pagar.me, 
                aplicação funcional, com acesso aos petshops através do mapa, carrinho de compras, 
                cadastro de cartão e de usuário.
                "/>
            </div>
          </Card>

          <Card>
            <img src={saoquadrado} alt="petfood" />
            <div className="content">
              <TitleDescription children="SÃO QUADRADO ENGENHARIA" />
              <div className="container-badges">
                <Badge>
                  <BadgeTitle children="HTML 5" />
                </Badge>
                <Badge>
                  <BadgeTitle children="CSS 3" />
                </Badge>
                <Badge>
                  <BadgeTitle children="JAVASCRIPT" />
                </Badge>
                <Badge>
                  <BadgeTitle children="JQUERY" />
                </Badge>
              </div>
              <Paragraph
                children="Site institucional da empresa São Quadrado Engenharia, desenvolvido utilizando as premissas básicas do desenvolvimento web, sem o uso de frameworks.
                "/>
            </div>
          </Card>
        </div>

        <div className="ux-button">
          <Button children="VER MAIS" />
        </div>
      </section>

      <section className="container">
        <Title children="Principais habilidades"/>
        
      </section>

    </main>
  )
}