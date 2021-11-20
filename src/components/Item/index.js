import { SubtitleItem } from "../Subtitle";
import './styles.css'

export function Item({img, subtitle}){

  return (
    <div className="item" data-aos="zoom-in"  data-aos-once="true">
      <img src={img} alt="skill" loading="lazy"/>
      <SubtitleItem children={subtitle}/>
    </div>
  )
}