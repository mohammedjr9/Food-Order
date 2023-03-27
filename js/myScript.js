var header = document.getElementById("toScroll");
var message = document.getElementById("script");
var mes = document.querySelector("#mes")
var mess = document.getElementById("lay");
var b = document.getElementById("b");
var bb = document.getElementById("bb");
var visa = document.getElementById("visa");
var offset = document.getElementById("offset");
var scrollone = document.getElementById("st");
var totalNumber = document.querySelectorAll('.counter-text');
var getNumber = Array.from(totalNumber)

b.addEventListener("click" , (params) => {
  visa.style.display = "block"
  mes.style.opacity = "0"
})
console.log(header);
bb.addEventListener ("click" ,  (params) => {
    mes.style.opacity = "0"
})

message.addEventListener ("click" ,  (params) => {
    mess.style.display ="block"
    mess.style.transition = ".5s"
    visa.style.display = "none"

})
window.onscroll = function () {
  if (window.scrollY >= "2") {
    header.style.backgroundColor = "#ffc404e7";
    header.style.transition = "1s";
    header.style.boxShadow = "0 5px 5px #303030";
  } else {
    header.style.backgroundColor = "transparent";
    header.style.transition = "1s";
    header.style.boxShadow = "none";
  }
  if(window.scrollY >= "2800"){
    scrollone.style.opacity = "1"
    scrollone.style.border = "3px solid white"

}else{
    scrollone.style.opacity = "0"
}
  if (window.scrollY >= "100") {
    message.style.opacity = "1";
    message.style.transition = "1s";
  } else {
    message.style.opacity = "0";
    message.style.transition = "1s";
  }

  if(window.scrollY  >= offset.offsetTop + 2000){   
    getNumber.map((viewNumber) => {
      console.log(viewNumber.dataset.number)
      var startCount = 0
      var counterUP = () => {
          startCount++
         viewNumber.innerHTML = `${startCount}`
         if(startCount == viewNumber.dataset.number){
             clearInterval(countStop)
         }
      }
      let countStop = setInterval(() => {
          counterUP()
      },13)
    })
    
  }

}
scrollone.addEventListener("click" , () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });})
  

  function mm(){
    var a = 10
    if(a>5){
      a = 7
    }
    alert(a)
  }