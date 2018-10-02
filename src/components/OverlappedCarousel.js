import React from 'react'



class OverlappedCarousel extends React.Component {
  state = { name: 'holis' }

  moveToSelected = classname => {

    if (classname == "next") {
      var selected = document.getElementsByClassName('selected')[0].nextElementSibling;    
    } else if (classname == "prev") {
      var selected = document.getElementsByClassName('selected')[0].previousElementSibling;    
    } else {
      //var selected = element;
    }  
    
    var next = selected.nextElementSibling;
    var prev = selected.previousElementSibling;
    var prevSecond = prev.previousElementSibling;
    var nextSecond = next.nextElementSibling;


    this.toggleClass(selected, 'selected');
    this.toggleClass(prev, 'prev');
    this.toggleClass(next, 'next');
    this.toggleClass(nextSecond, 'nextRightSecond');
    this.toggleClass(prevSecond, 'prevLeftSecond');

    //toggleClass(nextSecond, 'hideRight');
    //toggleClass(prevSecond, 'hideLeft');    

  }

  toggleClass = (element, classname) => {
   
    if (classname == 'nextRightSecond' || classname == 'prevLeftSecond') {
      console.log(element);
    }
    element.removeAttribute('class');
    element.setAttribute('class', classname);
  }

  /*document.addEventListener("keydown", function(e){  
      if (e.key == 'ArrowRight'){
        moveToSelected('next');
      }
      else if (e.key == 'ArrowLeft'){
        moveToSelected('prev');
      }
  };*/





  

  render() {
    const { name} = this.state
  

    return ( 
      <div>
      <div id="carousel">
        <div className="hideLeft">
          <img src="https://i1.sndcdn.com/artworks-000165384395-rhrjdn-t500x500.jpg"/>
        </div>

        <div className="prevLeftSecond">
          <img src="https://i1.sndcdn.com/artworks-000185743981-tuesoj-t500x500.jpg"/>
        </div>

        <div className="prev">
          <img src="https://i1.sndcdn.com/artworks-000158708482-k160g1-t500x500.jpg"/>
        </div>

        <div className="selected">
          <img src="https://i1.sndcdn.com/artworks-000062423439-lf7ll2-t500x500.jpg"/>
        </div>

        <div className="next">
          <img src="https://i1.sndcdn.com/artworks-000028787381-1vad7y-t500x500.jpg"/>
        </div>

        <div className="nextRightSecond">
          <img src="https://i1.sndcdn.com/artworks-000108468163-dp0b6y-t500x500.jpg"/>
        </div>

        <div className="hideRight">
          <img src="https://i1.sndcdn.com/artworks-000064920701-xrez5z-t500x500.jpg"/>
        </div>

      </div>

      <div className="buttons">
        <button id="prev" onclick={this.moveToSelected('prev')}>Prev</button>
        <button id="next" onclick={this.moveToSelected('next')}>Next</button>
      </div>

      </div>

    )
  }
}


export default OverlappedCarousel;