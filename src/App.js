import hero from './assets/capa.png'
import Toggle from './components/Toggle'
import './styles/App.css'
import './styles/global.css'

export default function App() {
  return (
    <main>
      <section className="hero">
        <div>
          <h1>Lincoln Modesto</h1>
          <h4>Desenvolvedor Front-end/Mobile</h4>
        </div>
        <img src={hero} alt="hero"/>
      </section>

      <section className="effects">
        <div className="container-toggle">
          <h3>Dark Mode</h3>
          <Toggle/>
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
    </main>
  )
}