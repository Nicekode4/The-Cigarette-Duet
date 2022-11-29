let bad = [
    "You’re Risking Lung Cancer and Other Respiratory Diseases",
    "You May Have Dangerous Circulation Issues",
    "Quitting smoking improves your fertility",
    "Non-smokers can enjoy better sex",
    "Ingesting Deadly Carcinogens",
    "Smoking Is Linked to Premature Aging",
    "You’re Exposing Loved Ones to Secondhand Smoke",
    "Smoking Carries a Heavy Social Stigma",
    "You’re Throwing Your Money Away",
    "You’ll Feel 100% Better",
    "Everything stinks! From your skin, to your whole house, your clothes, and your fingers and breath.",
    "Tobacco causes teeth to yellow and creates excess dental plaque.",
    "Cigarettes remain an important cause of accidental fires and resulting deaths.",
    "Tobacco use can affect social interactions and relationships negatively.",
    "Quitting means there are no restrictions on where you can go — you can mingle socially, without feeling isolated or having to go outside to smoke.",
    "Tobacco causes over 20 types of cancer.",
    "Adult smokers are more likely to suffer hearing loss.",
    "Tobacco harms almost every organ of the body.",
    "Tobacco use and exposure to tobacco smoke during pregnancy increase the risk for fetal death.",
    "Tobacco pollutes the environment",
    "Deforestation for tobacco growing has many serious environmental consequences — including loss of biodiversity, soil erosion and degradation, water pollution and increases in atmospheric carbon dioxide.",
    "For every 300 cigarettes produced (roughly 1.5 cartons), one tree is required to cure the tobacco leaf alone."
]
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
shuffle(bad)
console.log(bad);
const good = [
    "Føles godt",
    "Man bliver sej"
]

let count = -1;

function newArg() {
    count++
    if (document.querySelector('#textInput').value) {
        document.querySelector('#goodList').innerHTML += `<li>${document.querySelector('#textInput').value}</li>` 
        document.querySelector('#textInput').style.display = "none"  
    }else{
      document.querySelector('#goodList').innerHTML += `<li>${good[count]}</li>`   
    }
    
    document.querySelector('#argBtn').style.display = "none"
    setTimeout(() => {
        document.querySelector('#badList').innerHTML += `<li>${bad[count]}</li>` 
        document.querySelector('#textInput').style.display = "block"
        document.querySelector('#textInput').value = ""
        document.querySelector('#argBtn').style.display = "block"
    }, 1000);
}       

document.body.onkeyup = function(e) {
    if (e.key == " " ||
        e.code == "Enter" ||      
        e.keyCode == 13      
    ) {
      newArg()
    }
  }