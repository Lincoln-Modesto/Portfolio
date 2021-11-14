import './styles.css'

export default function Toggle({onToggleTheme}) {
  return (
    <div class="toggle">
      <input type="checkbox" id="foo" onChange={onToggleTheme} defaultChecked/>
      <label for="foo"></label>
    </div>
  )
}