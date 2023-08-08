import { useState } from 'react';
import './App.css';

function App() {
  const [shadowType, setshadowType] = useState("offset")
  const [colorPicker, setcolorPicker] = useState("#212121")
  const [shadowPropertise, setshadowPropertise] = useState({
    x: "5",
    y: "5",
    displayBox:"#A459D1",
    blur: "5",
    spread:"0"
  })
  return (
    <>
      <div className="App">
        <p className='title'>Box Shadow Generator</p>
      </div>
      <div className='gen-main'>
        <div className='generator'>
          <div className='generatingValue'>
            <div className="field">
              <label htmlFor='shadowType-type'>Shadow Type</label>
              <select className="input-field" name="shadowType-type" id="shadowType-type" value={shadowType} onChange={e => setshadowType(e.target.value)}>
                <option value="offset">Inside the box(Offset)</option>
                <option value="inset">Inside the box(Inset)</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor='showwidth-x'>Horizontal Shadow length (in px)</label>
              <input placeholder="eg..20" name='showwidth-x' value={`${shadowPropertise.x}`} onChange={(e) => {
                setshadowPropertise({...shadowPropertise,x:e.target.value})
              }} className="input-field" type="text" />
            </div>
            <div className="field">
              <label htmlFor='showwidth-y'>Vertical Shadow length (in px)</label>
              <input placeholder="eg..20" name='showwidth-y' value={`${shadowPropertise.y}`} onChange={(e) => {
                setshadowPropertise({...shadowPropertise,y:e.target.value})
              }} className="input-field" type="text" />
            </div>
            <div className="field">
              <label htmlFor='blur-radius'>Blur Radius   (in px)</label>
              <input placeholder="eg..20" name='blur-radius' value={shadowPropertise.blur} onChange={(e) => {
                setshadowPropertise({...shadowPropertise,blur:e.target.value})
              }}  className="input-field" type="text" />
            </div>
            <div className="field">
              <label htmlFor='spread-radius'>Spread Radius   (in px)</label>
              <input placeholder="eg..20" name='spread-radius' value={shadowPropertise.spread} onChange={(e) => {
                setshadowPropertise({...shadowPropertise,spread:e.target.value})
              }} className="input-field" type="text" />
            </div>
            <div className='colorPickerParent'>
              <div className="field" style={{width:"50%"}}>
                <label htmlFor='box-color-in-hex' className='colorpicker'>Box Color (in hex)</label>
                <input placeholder="Hex Code"  name='box-color-in-hex' className="input-field" value={shadowPropertise.displayBox} onChange={(e) => {
                setshadowPropertise({...shadowPropertise,displayBox:e.target.value.toUpperCase()})
              }} type="text" />
              </div><span>Or</span>
              <div className="field" style={{width:"30%"}}>
                <label htmlFor='box-color-picker' className='colorpicker'>Pick your color</label>
                <input placeholder="color picker" name='box-color-picker' value={shadowPropertise.displayBox} onChange={(e) => {
                setshadowPropertise({...shadowPropertise,displayBox:e.target.value.toUpperCase()})
              }} className="input-field" type="color" />

              </div>
            </div>
            <div className='colorPickerParent'>
              <div className="field" style={{width:"50%"}}>
                <label htmlFor='color-in-hex' className='colorpicker'>Shadow Color (in hex)</label>
                <input placeholder="Hex Code"  name='color-in-hex' className="input-field" value={colorPicker} onChange={(e) => setcolorPicker(e.target.value)} type="text" />
              </div><span>Or</span>
              <div className="field" style={{width:"30%"}}>
                <label htmlFor='color-picker' className='colorpicker'>Pick your color</label>
                <input placeholder="color picker" name='color-picker' value={colorPicker} onChange={(e) => setcolorPicker(e.target.value.toUpperCase())} className="input-field" type="color" />

              </div>
            </div>
          </div>
          <div className='display' style={{boxShadow:`${shadowPropertise.x}px ${shadowPropertise.y}px ${shadowPropertise.blur}px ${shadowPropertise.spread}px ${colorPicker} ${shadowType==="offset"?"":shadowType}`,background:`${shadowPropertise.displayBox}`}} ></div>
        </div>
      </div>

    </>
  );
}

export default App;
