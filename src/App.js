import React, {useState, useEffect} from 'react'
import Card from './components/Card'

function App() {
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)
  const [clickedImages, setClickedImages] = useState([])
  const [fade, setFade] = useState(false)


  let images = [{url: './images/Donald.png', name: 'Donald'},{url: './images/Goofy.png', name: 'Goofy'},{url: './images/Kairi.png', name: 'Kairi'},{url: './images/Riku.png', name: 'Riku'},{url: './images/Roxas.png', name: 'Roxas'},{url: './images/Sora.png', name: 'Sora'},{url: './images/Ventus.png', name: 'Ventus'},{url: './images/Xehanort.png', name: 'Xehanort'},{url: './images/Xemnas.png', name: 'Xemnas'},{url: './images/Xion.png', name: 'Xion'}]

  const shuffle = (array) => {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  const clickImage = (image) => {


    let imageExists = false
    if(clickedImages.some(e => e.name === image.name)) {imageExists = true}

    if (imageExists) {
      console.log('That image has been previously clicked')
      setClickedImages([])
      if (highScore < score) {
        setHighScore(score)
      }
      setScore(0)

      setFade(true)
      setTimeout(()=>{setFade(false)},1000)

    } else {
      setClickedImages(clickedImages.concat(image))
      let newScore = score + 1
      setScore(newScore)
    }
  }

  useEffect(() => {
    if(score === 10) {
      console.log('You got 10')
      alert('You got them all!')
      setTimeout(() => {window.location.reload()}, 100)
    }
  }, [score])
  
  images= shuffle(images)

  return (
    <div>
      <header>
        <h1>Kingdom Hearts Memory Game</h1>
        <p>Click on each character, without clicking the same one twice</p>
      </header>

       <div className={(fade ? 'fading' : '') + " card-container"}>
        <div onClick={() => {clickImage(images[0])}}><Card image={images[0]}/></div>
        <div onClick={() => {clickImage(images[1])}}><Card image={images[1]}/></div>
        <div onClick={() => {clickImage(images[2])}}><Card image={images[2]}/></div>
        <div onClick={() => {clickImage(images[3])}}><Card image={images[3]}/></div>
        <div onClick={() => {clickImage(images[4])}}><Card image={images[4]}/></div>
        <div onClick={() => {clickImage(images[5])}}><Card image={images[5]}/></div>
        <div onClick={() => {clickImage(images[6])}}><Card image={images[6]}/></div>
        <div onClick={() => {clickImage(images[7])}}><Card image={images[7]}/></div>
        <div onClick={() => {clickImage(images[8])}}><Card image={images[8]}/></div>
        <div onClick={() => {clickImage(images[9])}}><Card image={images[9]}/></div>
      </div>

      <div className="stats">
        <p>Score: {score}</p>
        <p>High Score: {highScore}</p>
      </div>
    </div>
  );
}

export default App;
