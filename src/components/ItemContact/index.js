import { SubtitleItem } from "../Subtitle";

import './styles.css'

export function ItemContact({img, subtitle, contact}){
  return (
    <a className="item" href={contact} target="_blank" rel="noreferrer">
      <img src={img} alt="skill"/>
      <SubtitleItem children={subtitle}/>
    </a>
  )
}