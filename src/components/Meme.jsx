import React from 'react'
// import memesData from '../memeData'
// let url
function Meme() {
  // const [memeImage, setMemeImage] = React.useState("http://i.imgflip.com/1bij.jpg")
  const[meme,setMeme]=React.useState({
topText:"",
bottomText:"",
randomImage:"http://i.imgflip.com/1bij.jpg"
  })
  const[allMemes,setAllMemes]=React.useState([])
// React.useEffect(()=>{
//   fetch("https://api.imgflip.com/get_memes")
//   .then(res=>res.json())
  // .then(data=>console.log(data))
  // .then(data=>setAllMemes(data.data.memes))
// },[])

// React.useEffect(async()=>{
//   const res=await fetch("https://api.imgflip.com/get_memes")
//   const data=await res.json()
//   setAllMemes(data.data.memes)
// },[])
React.useEffect(() => {
  const fetchMemes = async () => {
    const res = await fetch("https://api.imgflip.com/get_memes");
    const data = await res.json();
    setAllMemes(data.data.memes);
  };
  fetchMemes();
}, []);

function generateImage(){ 
// console.log("hey");
// const memesArray = allMemes.data.memes
const randomNumber = Math.floor(Math.random() * allMemes.length)
const url=allMemes[randomNumber].url
setMeme(prevmeme=>{
 return {
  ...prevmeme,
  randomImage:url
}
})
// url =memesArray[randomNumber].url
// console.log(url);
}
function handleChange(event){
  const {name,value}=event.target
   setMeme(prevMeme=>{
    return{
      ...prevMeme,
      [name]:value
    }
   })
}
  return (
    <main>
    <div className='form'>
        <div>
            <label htmlFor="top-text">Top Text </label>
            <input id="top-text" type="text" className='form--input' placeholder="Shut up"
            name="topText"
            value={meme.topText}
            onChange={handleChange}
            />
        </div>
        <div>
            <label htmlFor="bottom-text">
                Bottom Text
                </label>
                <input id="bottom-text" type="text" className='form--input' placeholder="and take my money"
                 name="bottomText"
                 value={meme.bottomText}
                 onChange={handleChange}
                />
            
        </div>
        <button className='form--button' onClick={generateImage}>Get a new meme image 🖼</button>
    </div>
    <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div> 
</main>
  )
}

export default Meme