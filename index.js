// DEIXANDO O HEADER PRESO NA TELA
const header = document.querySelector("header")

window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",window.scrollY > 0);
})

// GERANDO OR PROJETOS NO HTML VIA JAVASCRIPThttps://github.com/Rodrigo-Alb/Buscador_de_Clima

const projetos = [
    {
        'title':'Buscador de Clima',
        'live':"https://rodrigo-alb.github.io/Buscador_de_Clima/",
        'url':"./components/Buscador_Clima_img.png", 'id':'2',
        'id':'2',
        'code':'https://github.com/Rodrigo-Alb/Buscador_de_Clima',
        'txt':`Projeto criado com Javascript <i class='bx bxl-javascript'></i>, HTML5 <i class='bx bxl-html5' ></i> e CSS3 <i class='bx bxl-css3' </i>`
    },
    {
        'title':'Controle Financeiro',
        'live':"https://rodrigo-alb.github.io/Controle_Financeiro/",
        'url':"./components/controle_Financeiro.png", 
        'id':'3',
        'code':'https://github.com/Rodrigo-Alb/Controle_Financeiro',
        'txt':`Projeto criado com Javascript <i class='bx bxl-javascript'></i>, HTML5 <i class='bx bxl-html5' ></i> e CSS3 <i class='bx bxl-css3'</i>`
    },
    {
        'title':'Todo List',
        'live':"https://to-do-list-react-ten-xi.vercel.app/",
        'url':"./components/todo_list_React_img.png", 
        'id':'1', 
        'code':'https://github.com/Rodrigo-Alb/To-Do-List-React',
        'txt':'Projeto criado com React JS, Através de um Crash Course React.'
    }
]
function criarProjetos(titulo, live, id, code,cardPos,txt){
    const container = document.querySelector(".portfolio-content")

    const card = document.createElement("div")
    card.setAttribute('class','cards')
    card.setAttribute('id',`${cardPos}`)
    card.innerHTML = `
        <div class="top-card">
            <h2 class="title">${titulo}</h2>
            <span class="second-text">${txt}</i></span>
        </div>
        <hr>
        <div class="media-card" id=${id}></div>
        <hr>
        <div class="buttons">
            <a href=${code} target="_blank">Ver Código</a>
            <a href="${live}">Ao Vivo</a>
        </div>
    `
  
    container.appendChild(card)
}

const loadProjetos = () => {
    projetos.forEach ((item) => {
        criarProjetos(item.title,item.live,item.id,item.code, item.cardPos, item.txt)
    })
}

const loadImages = ( ) =>{
    projetos.forEach(
        (item) => {
            const img = document.getElementById(`${item.id}`)
            img.style.backgroundImage = `url(${item.url})`
            img.style.backgroundPosition ="center"
            img.style.backgroundSize ="cover"
        }
    )
}

loadProjetos()
loadImages()

const menu = document.getElementById('menu')
const navegacao = document.getElementById('navegacao')
const links = document.querySelectorAll('.link')

const toggleMenu = () => {
    if(menu.classList.contains('closed')){    
        menu.src = 'components/burger.png'
        menu.setAttribute('class','open')
        navegacao.style.display='flex'
        
    }else if (menu.classList.contains('open')){
        menu.src ='components/R.png'
        menu.setAttribute('class','closed')
        navegacao.style.display='none'
    }
}
links.forEach( (link) => link.addEventListener('click',toggleMenu))
menu.addEventListener('click',toggleMenu)

