
const data = [
    {
        id:'1',
        question:"what is javaScript?",
        answer:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro dolor atque quidem culpa reprehenderit enim at esse voluptas molestiae. Culpa"
    },
    {
        id:'2',
        question:"what is python?",
        answer:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro dolor atque quidem culpa reprehenderit enim at esse voluptas molestiae. Culpa"
    },
    {
        id:'3',
        question:"what is java?",
        answer:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro dolor atque quidem culpa reprehenderit enim at esse voluptas molestiae. Culpa"
    },
    {
        id:'4',
        question:"what is Golang?",
        answer:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro dolor atque quidem culpa reprehenderit enim at esse voluptas molestiae. Culpa"
    },
    {
        id:'5',
        question:"what is Ruby?",
        answer:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro dolor atque quidem culpa reprehenderit enim at esse voluptas molestiae. Culpa"
    },
    
];

let accordionWrapper = document.querySelector('.accordion');


function createAccordionData(){
    accordionWrapper.innerHTML = data.map(dataItem => `
        <div class ="accordion_item">
        <div class ="accordion_title">
        <h3>${dataItem.question}</h3>
        <i class="fa-solid fa-arrow-up"></i>
        </div>
        <div class="accordion_content">
        <p>${dataItem.answer}</p>
        </div>
        </div>
        `).join("");
}

createAccordionData();


const getAccordionTitles = document.querySelectorAll('.accordion_title');

console.log(getAccordionTitles);

getAccordionTitles.forEach(currentItem =>{
    currentItem.addEventListener('click', (event) =>{
        if(currentItem.classList.contains('active')){
            currentItem.classList.remove('active');
        }
        else{
            let getAlreadyAdddedActiveClasses = document.querySelectorAll('active');

            getAlreadyAdddedActiveClasses.forEach(currentActiveItem =>{
                currentActiveItem.classList.remove('active');
            })

            currentItem.classList.add('active');
        }
    })
})