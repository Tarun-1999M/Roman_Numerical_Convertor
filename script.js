number = document.getElementById('number');
convertBtn = document.getElementById('convert-Btn');
output = document.getElementById('output');


const Roman =[
    {
        1000:'M',
        2000:'MM',
        3000:'MMM'
    },
    {
        100:'C',
        200:'CC',
        300:'CCC',
        400:'CD',
        500:'D',
        600:'DC',
        700:'DCC',
        800:'DCCC',
        900:'CM'
    },
    {
        10:'X',
        20:'XX',
        30:'XXX',
        40:'XL',
        50:'L',
        60:'LX',
        70:'LXX',
        80:'LXXX',
        90:'XC'

    },
    {
        1:'I',
        2:'II',
        3:'III',
        4:'IV',
        5:'V',
        6:'VI',
        7:'VII',
        8:'VIII',
        9:'IX'
    }
]



const checkNumber = (e)=>{

    e.preventDefault();
    console.log(number)
    value = parseInt(number.value);
    console.log(value);
    if(!value || isNaN(parseInt(value))){
        
        output.innerText = "Please enter a valid number";
    }
    else if(value<0){
        output.innerText = "Please enter a number greater than or equal to 1";
    }
    else if(value>3999){
        output.innerText = "Please enter a number less than or equal to 3999";
    }
    else{

     converter(value);
    }
}


function converter(value){

    let result="";
    let i = 1;
    let rem;
    let s;
   while(value>0){
    rem=value % 10;
    s=rem*i;
    i=i*10;
    value=Math.floor(value/10);
    Roman.forEach((obj)=>{
        if(s  in obj){
            result =  obj[s] + result ;
        }
    })
   }
    
    output.innerText = `${result}`;
}
convertBtn.addEventListener('click',checkNumber);