import { SubtitleItem } from "../Subtitle";

import './styles.css'

export function Item({img, subtitle}){
  return (
    <div className="item">
      <img src={img} alt="skill" loading="lazy"/>
      <SubtitleItem children={subtitle}/>
    </div>
  )
}