const log = (a) => console.log(a)
let timer = document.createElement('div')

timer.style='padding-top:100px'

document.body.append(timer)
setTimeout(()=> {
  timer.textContent='10'
  setTimeout(()=>{
    timer.textContent='9'
    setTimeout(()=>{
      timer.textContent='8'
      setTimeout(()=>{
        timer.textContent='7'
        setTimeout(()=>{
          timer.textContent='6'
          setTimeout(()=>{
            timer.textContent='5'
            setTimeout(()=>{
              timer.textContent='4'
              setTimeout(()=>{
                timer.textContent='3'
                setTimeout(()=>{
                  timer.textContent='2'
                  setTimeout(()=>{
                    timer.textContent='1'
                    setTimeout(()=>{
                      timer.textContent='Happy Independance Day to All  !!!'
                    })
                  },1000)
                },1000)
              },1000)
            },1000)
          },1000)
        },1000)
      },1000)
    },1000)
  },1000)
},1000)