let input = document.getElementById("box")
let button = document.querySelectorAll("button")

let string ="";
let arr = Array.from(button)

const operators = ['+', '-', '*', '/', '.']

arr.forEach(button => {
    button.addEventListener("click", (e) => {
        if(e.target.innerHTML === "="){
            try{
                string = eval(string)
                input.value = string
            }catch(err){
                input.value = "Error"
                string = ""
            }
            
        }else if(e.target.innerHTML === "AC"){
            string = ""
            input.value = string
        }else if(e.target.innerHTML === "DEL"){
            string = string.substring(0, string.length-1)
            input.value = string
            
        }else{
            let lastChar = string[string.length - 1]
            if(operators.includes(lastChar) && operators.includes(e.target.innerHTML)){
                return
            }
        
            string += e.target.innerHTML
            input.value = string
        }

    })
})