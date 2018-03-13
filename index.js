(function(){
  function writeCode(code, fn){
    let codePreview = document.querySelector('#code')
    let styleTag = document.querySelector('#styleTag')
    let n = 0
    let time = 20
    // let id  = setInterval(function(){
    //   n+=1 
    //   codePreview.innerHTML = code.substring(0,n)
    //   styleTag.innerHTML = code.substring(0,n)
    //   codePreview.scrollTop = codePreview.scrollHeight
    //   if(n>=code.length){
    //     window.clearInterval(id)
    //   }
    // },20) 
    let id = setTimeout(function run(){
      n+=1
      codePreview.innerHTML = code.substring(0,n)
      styleTag.innerHTML = code.substring(0,n)
      if(n<=code.length){
        id = setTimeout(run, time) //point
      }
    },time)
    let action = document.querySelector('.action')
    action.addEventListener('click', function(e){
      let target = e.target
      if(target.classList.contains('finish')){
        clearInterval(id)
        codePreview.innerHTML = code
        styleTag.innerHTML = code
      }
    })
  }


  let code = `
  /*
  * 今天我们来画一个皮卡丘。
  * 首先我们要有一个背景。
  */
  .style-preview{
    height: 100%;
    background: #FFE600;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .wrapper{
    width: 100%;
    height: 300px;
    position: relative;
  }
  /*
  * 接着我们来画一个鼻子~
  */
  .nose{
    border: 15px solid;
    border-color: black transparent transparent;
    border-radius: 15px/10px;
    position: absolute;
    top: 35px;
    left: 50%;
    transform: translateX(-50%);
  }
  /*
  * 画好了之后当然是画眼睛啦
  */
  .eye{
    width: 65px;
    height: 65px;
    border: 3px solid;
    border-radius: 50%;
    position: absolute;
    top: 0;
    background: #292929;
  }
  .eye::before{
    content: '';
    height: 32px;
    width: 32px;
    border: 3px solid;
    border-radius: 50%;
    background: #fff;
    position: absolute;
    top: -1px;
    left: 7px;
  }
  /*
  * 不要忘记要画两只眼睛喔
  */
  .eye.left{
    right: 50%;
    margin-right:90px;
  }
  .eye.right{
    left: 50%;
    margin-left:90px;
  }
  /*
  * 接着我们再来画它的脸颊~
  */
  .face{
    width: 90px;
    height: 90px;
    border: 3px solid;
    border-radius: 50%;
    position: absolute;
    top:112px;
    background: #F00;
  }
  .face.left{
    right: 50%;
    margin-right: 125px;
  }
  .face.right{
    left: 50%;
    margin-left: 125px;
  }
  /*
  * 然后就是它的嘴巴啦
  * 首先是它的上嘴唇
  */
  .upperLip{
    height: 25px;
    width: 85px;
    border: 3px solid;
    position: absolute;
    top:70px;
    background: #FFE600;
  }
  .upperLip.left{
    border-top: none;
    border-right: none;
    border-bottom-left-radius: 50px 25px;
    transform: rotate(-15deg);
    right: 50%;
  }
  .upperLip.right{
    border-top: none;
    border-left: none;
    border-bottom-right-radius: 50px 25px;
    transform: rotate(15deg);
    left: 50%;
  }
  /*
  * 接着是下嘴唇
  */
  .mouth-wrapper{
    height: 160px;
    width: 200px;
    position: absolute;
    bottom: 60px;
    left: 50%;
    transform: translateX(-50%);
    overflow: hidden;
  }
  .mouth{
    height: 1000px;
    width: 200px;
    border: 3px solid;
    border-radius: 100px/500px;
    position: absolute;
    bottom: 0;
    background: #91000C;
    overflow: hidden;
  }
  /*
  * 还要记得画出它的舌头才行
  */
  .mouth::before{
    content: '';
    height: 150px;
    width: 150px;
    border-radius: 50%;
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
    background: #FF3F54;
  }
  /*
  * 最后的最后当然要让皮卡丘的大眼睛眨动起来了
  */
  .eye{
    animation: hei 4s 2s infinite linear;
  }
  /*
  * 好啦，这就是我们画好的皮卡丘啦
  */
  `
  writeCode(code)
  


})()