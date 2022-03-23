// // // let texte = "un text au choix";
// // // let nombre = 235;
// // // let isCool = true;

// // // console.log(texte)
// // // console.log(nombre)
// // // console.log(isCool)

// // let prenom = "Sylvain"
// // let age = 38

// // console.log("je m'appel "+prenom)
// // console.log('je m\'appel '+prenom)
// // console.log(`je m'appel ${prenom}`)

// // // je m'appel Sylvain j'ai 38 ans

// // console.log("je m'appel " + prenom + " j'ai " + age + " ans")
// // console.log(`je m'appel ${prenom} j'ai ${age} ans`)

// // // console.log(prenom.length)

// // prenom.substring(0,4)


// // console.log(prenom.split(''));

// // let nomComplet = "Julien La Garde, Julien La Garde, Julien La Garde";
// // console.log(nomComplet.split('Julien'));


// // // créer une nouvelle variable contenant un tableau js, avec au moins 5 entrées
// //     // - faire un console.log de ce tableau
// //     // - puis y ajouter une nouvelle entrée au début et à la fin
// //     // - modifier/donner une nouvelle valeur a la 3ème entrée
// //     // - refaire un console.log de ce tableau

// // let personne = {
// //     prenom: "Julien",
// //     nom: "La garde",
// //     age: 30,
// //     passions: ["foot", "natation", "jeux videos"],
// //     adresse : {
// //         rue : "rue Nationale",
// //         ville : "Lille",
// //         pays : "France"
// //     }
// // };




// // // <julien> est agé de <30> ans, il habite à <lille>

// // console.log(`${personne.prenom} est agé de ${personne.age} ans, il habite a ${personne.adresse.ville}`)

// // // ajouter une nouvelle passion a julien!
// // personne.passions.push('xxx')

// // //julien déménage

// // personne.adresse.pays = "nouveau pays"
// // personne.adresse.ville = "nouvelle ville"
// // personne.adresse.rue = "nouvelle rue"

// // personne.adresse = {
// //     rue: "nouveau rue",
// //     ville: "nouvelle ville",
// //     pays: "nouvelle pays",
// // }



// // // lire la partie objet du pdf(pages 9-10), puis:
// // //     - réussir a afficher cette phrase ou les mot entre <> sont des variables
// // //     // <julien> est agé de <30> ans, il habite à <lille>
// // //     - ajouter une nouvelle passion a julien(ex: lecture)
// // //     - julien déménage, modifier sa rue, sa ville et son pays


// // // déclarer une nouvelle variable 'age' avec la valeur que vous voulez, puis a l'aide d'un block condition afficher dans la console si la personne est majeur ou mineure

// // age = 15

// // if(age >= 18){
// //     console.log("la personne est majeur")
// // } else {
// //     console.log('la personne est mineur')
// // }


// // // nouvelle variable 'performance' vous lui donner la valeur que vous voulez, et on initialise également une variable prime a 0

// //     // si perf >= 90 => prime de 200
// //     // si perf >= 80 => prime de 150
// //     // si perf >= 70 => prime de 100
// //     // si perf < 70 => prime de 0

// // //     vu votre performance de XXX vous gagnez une prime de XX €

// //     let perf = 80 // (0-100)
// //     let prime = 0

// //     if(perf >= 90){
// //         prime = 200
// //     }else if(perf >= 80){
// //         prime = 150
// //     }else if( perf >= 70){
// //         prime = 100
// //     }else{
// //         prime = 0
// //     }

// //         console.log("vu votre \"performance\" de "+perf+" vous gagnez une prime de "+prime+"€")
// //         console.log(`vu aujourd'hui "votre performance" de ${perf} vous gagnez une prime de ${prime}€`)

// // // let x=12
// // // let message = x > 10 ? "commande permise" : "commande non permise";
// // // console.log(message);

// // let txt1 = "how're you to     day?";
// // let txt2 = "welcome to Hkkkkk";
// // // a l'aide d'un ternaire afficher dans un console.log txt1 plus CanvasGradient, ou txt2 plus grand

// // let message = txt1.length > txt2.length ? "txt1 plus grand": txt1.length < txt2.length ? "txt1 plus petit": "les text sont égaux";
// // console.log(message)

// // let vehicule = {
// //     id: 11456,
// //     matricule: "GH 114654 - 59",
// //     type: "c",
// //     age: 6,
// // };


// // // type : v=voiture /  c=camion
// // console.log(vehicule.type == "v"?"voiture": "camion")

// // // <= 5 ans : age normal
// // // >5 : vehicle agé

// // console.log(vehicule.age <= 5? 'age normal': 'vehicule agé')
// // console.log(vehicule.age > 5? 'vehicule agé': 'age normal')



// // let age1 = prompt('indiquez votre age')
// // console.log(age1)
// // let result = '';

// // // mineur / majeur / retraité
// // // 0-18    18-60      60 +
// // switch (true) {
// //  case age1 >= 0 && age1 < 18:
// //   console.log("mineur");
// //   break;
// //  case age1 >= 60:
// //   console.log("retraité");
// //   break;
// //  case age1 >= 18 && age<60:
// //   console.log("majeur");
// //   break;
// //  default:
// //    console.log("erreur")
// // }

// // let grade = prompt('indiquez votre garde')
// // let salaire = 0

// // switch (grade) {
// //  case "junior":
// //  salaire = 1800
// //  break;
// //  case "confirmé":
// //  salaire = 2500
// //  break;
// //  case "senior":
// // salaire = 3200
// // }
// // console.log ("avec votre grade de "+grade+" vous gagnez un salaire de "+salaire+"€")

// // let roues = prompt("indiquez le nombre de roues qu'a votre véhicule")
// // let vehicle = ""

// // console.log(typeof roues)

// // switch (roues) {
// //     case "2":
// //         vehicle = "moto"
// //         break;
// //     case "4":
// //         vehicle = "voiture"
// //         break;
// //     case "6":
// //         vehicle = "camion"
// // }
// // console.log("avec " + roues + " roues , vous avez une " + vehicle)

// // let fruits = ["mangue", "pastèque", "poire", "orange", "ananas"];

// // console.log('XXX')
// document.write("i stocke la valeur X lors du passage n XX dans la boucle<br>")
// cars = ['BMW', 'Volvo', 'Saab', 'Ford', 'Fiat', 'Audi'];
// // dans votre navigateur afficher la liste complète des voiture avec une boucle for
// const cars = ['BMW', 'Volvo', 'Saab', 'Ford', 'Fiat', 'Audi'];

// for (let i = 0; i < cars.length; i++) {
//      text += `${cars[i]} <br> `
// }
//    document.write(text)


// /*
// avec le tableau todos afficher dans le navigateur la phrase(*4): 
// la tache 'xxx xxx xxx' est  | complété
//                             | non complété
// */

// todos[0].text -> faire les courses 
// todos [0].isCompleted -> true

// `la tache ${} est ${}`

// const todos = [
//      { 
//        id: 1 , 
//        text: "Faire les courses",
//        isCompleted : true ,
//      },
//      { id: 2,
//          text: "Balade au vieux Lille",
//          isCompleted : true,
//      },
//      {
//          id: 3,
//          text:"Preparer le diner",
//          isCompleted : false, 
//      },
//      {   id: 4,
//         text: "Regarder la tv",
//         isCompleted: false,
//      },
//     ];
//     for (let i = 0; i < todos.length; i++) {
//         (todos[i].longueur = todos[i].text.length + "<br>");
    // }
       
// todos[0].longueur = todos[0].text.length
// console.log(todos[0])

// let resultBis = ''
// for (let i = 0; i < todos.length; i++) {
//     document.write(todos[i].isCompleted? 'Complété'+ "<br>");   

// const cars = ['BMW', 'Volvo', 'Saab', 'Ford', 'Fiat', 'Audi'];

// let i = 0
// while (cars [i]) {
//     text += cars[i] + "<br>";
//    document.write (`la voiture ${cars[i]} contient ${cars[i].length} lettres`)
//     i++;
//   }

// let tab=[]
// const cars2 = [cars.length]
// for(let i=0 ; i<cars.length

    // cars.forEach(function (todo) {
    //     document.write(todo.text+"<br>");
    // });


    // cars.forEach(function (todo) {
    //     document.write('la tache est ${todo.isCompleted?'non complétée'})

        // function produit(a, b, c) {
        //     return a * b * c;
        // }
        // a = 4
        // b = 5
        // c = 1
        // console.log(produit(a, b, c));
        

        
        // function produit(a, ) {
        //     return a * 60;
        // }
        // a = 6
       
        
        // console.log(produit(a, 60));

        // function surface(a, b) {
        //     return a * b /2;
        // }
        // a = 6
        // b = 8
        
        // console.log(surface(a, b, 2));
        
        // let tableau=["aze", 'b' , 3]

        // function getfirst(tableau) {
        //          return tableau [0]
        //      }
             
// let phrase1 ="ojojpojp"
// let phrase2 ="kneenhn"

// function compare(phrase1, phrase2){
//     return phrase1.length>phrase2.length?'phrase1 plus longue' : 'phrase2plus longue'
// }
// console.log(compare(phrase1,phrase2))

// let grandephrase =' je mappelle Léo'
// console.log(grandephrase)
// console.log(grandephrase.split(' '));
// console.log(grandephrase.split(' ').reverse(' ').join(' '));

// let phrase1 = "bonjour nous sommes le 17 mars";

// function inverse(a) {
//     return a.split("").reverse().join("").split(" ").reverse().join(" ");
// }

// console.log(inverse(phrase1));

const PointTarget = ReactPoint.PointTarget

class AutoScalingText extends React.Component {
  state = {
    scale: 1
  };
  
  componentDidUpdate() {
    const { scale } = this.state
    
    const node = this.node
    const parentNode = node.parentNode
    
    const availableWidth = parentNode.offsetWidth
    const actualWidth = node.offsetWidth
    const actualScale = availableWidth / actualWidth
    
    if (scale === actualScale)
      return
    
    if (actualScale < 1) {
      this.setState({ scale: actualScale })
    } else if (scale < 1) {
      this.setState({ scale: 1 })
    }
  }
  
  render() {
    const { scale } = this.state
    
    return (
      <div
        className="auto-scaling-text"
        style={{ transform: `scale(${scale},${scale})` }}
        ref={node => this.node = node}
      >{this.props.children}</div>
    )
  }
}

class CalculatorDisplay extends React.Component {
  render() {
    const { value, ...props } = this.props
    
    const language = navigator.language || 'en-US'
    let formattedValue = parseFloat(value).toLocaleString(language, {
      useGrouping: true,
      maximumFractionDigits: 6
    })
    
    // Add back missing .0 in e.g. 12.0
    const match = value.match(/\.\d*?(0*)$/)
    
    if (match)
      formattedValue += (/[1-9]/).test(match[0]) ? match[1] : match[0]
    
    return (
      <div {...props} className="calculator-display">
        <AutoScalingText>{formattedValue}</AutoScalingText>
      </div>
    )
  }
}

class CalculatorKey extends React.Component {
  render() {
    const { onPress, className, ...props } = this.props
    
    return (
      <PointTarget onPoint={onPress}>
        <button className={`calculator-key ${className}`} {...props}/>
      </PointTarget>
    )
  }
}

const CalculatorOperations = {
  '/': (prevValue, nextValue) => prevValue / nextValue,
  '*': (prevValue, nextValue) => prevValue * nextValue,
  '+': (prevValue, nextValue) => prevValue + nextValue,
  '-': (prevValue, nextValue) => prevValue - nextValue,
  '=': (prevValue, nextValue) => nextValue
}

class Calculator extends React.Component {
  state = {
    value: null,
    displayValue: '0',
    operator: null,
    waitingForOperand: false
  };
  
  clearAll() {
    this.setState({
      value: null,
      displayValue: '0',
      operator: null,
      waitingForOperand: false
    })
  }

  clearDisplay() {
    this.setState({
      displayValue: '0'
    })
  }
  
  clearLastChar() {
    const { displayValue } = this.state
    
    this.setState({
      displayValue: displayValue.substring(0, displayValue.length - 1) || '0'
    })
  }
  
  toggleSign() {
    const { displayValue } = this.state
    const newValue = parseFloat(displayValue) * -1
    
    this.setState({
      displayValue: String(newValue)
    })
  }
  
  inputPercent() {
    const { displayValue } = this.state
    const currentValue = parseFloat(displayValue)
    
    if (currentValue === 0)
      return
    
    const fixedDigits = displayValue.replace(/^-?\d*\.?/, '')
    const newValue = parseFloat(displayValue) / 100
    
    this.setState({
      displayValue: String(newValue.toFixed(fixedDigits.length + 2))
    })
  }
  
  inputDot() {
    const { displayValue } = this.state
    
    if (!(/\./).test(displayValue)) {
      this.setState({
        displayValue: displayValue + '.',
        waitingForOperand: false
      })
    }
  }
  
  inputDigit(digit) {
    const { displayValue, waitingForOperand } = this.state
    
    if (waitingForOperand) {
      this.setState({
        displayValue: String(digit),
        waitingForOperand: false
      })
    } else {
      this.setState({
        displayValue: displayValue === '0' ? String(digit) : displayValue + digit
      })
    }
  }
  
  performOperation(nextOperator) {    
    const { value, displayValue, operator } = this.state
    const inputValue = parseFloat(displayValue)
    
    if (value == null) {
      this.setState({
        value: inputValue
      })
    } else if (operator) {
      const currentValue = value || 0
      const newValue = CalculatorOperations[operator](currentValue, inputValue)
      
      this.setState({
        value: newValue,
        displayValue: String(newValue)
      })
    }
    
    this.setState({
      waitingForOperand: true,
      operator: nextOperator
    })
  }
  
  handleKeyDown = (event) => {
    let { key } = event
    
    if (key === 'Enter')
      key = '='
    
    if ((/\d/).test(key)) {
      event.preventDefault()
      this.inputDigit(parseInt(key, 10))
    } else if (key in CalculatorOperations) {
      event.preventDefault()
      this.performOperation(key)
    } else if (key === '.') {
      event.preventDefault()
      this.inputDot()
    } else if (key === '%') {
      event.preventDefault()
      this.inputPercent()
    } else if (key === 'Backspace') {
      event.preventDefault()
      this.clearLastChar()
    } else if (key === 'Clear') {
      event.preventDefault()
      
      if (this.state.displayValue !== '0') {
        this.clearDisplay()
      } else {
        this.clearAll()
      }
    }
  };
  
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown)
  }
  
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown)
  }
  
  render() {
    const { displayValue } = this.state
    
    const clearDisplay = displayValue !== '0'
    const clearText = clearDisplay ? 'C' : 'AC'
    
    return (
      <div className="calculator">
        <CalculatorDisplay value={displayValue}/>
        <div className="calculator-keypad">
          <div className="input-keys">
            <div className="function-keys">
              <CalculatorKey className="key-clear" onPress={() => clearDisplay ? this.clearDisplay() : this.clearAll()}>{clearText}</CalculatorKey>
              <CalculatorKey className="key-sign" onPress={() => this.toggleSign()}>±</CalculatorKey>
              <CalculatorKey className="key-percent" onPress={() => this.inputPercent()}>%</CalculatorKey>
            </div>
            <div className="digit-keys">
              <CalculatorKey className="key-0" onPress={() => this.inputDigit(0)}>0</CalculatorKey>
              <CalculatorKey className="key-dot" onPress={() => this.inputDot()}>●</CalculatorKey>
              <CalculatorKey className="key-1" onPress={() => this.inputDigit(1)}>1</CalculatorKey>
              <CalculatorKey className="key-2" onPress={() => this.inputDigit(2)}>2</CalculatorKey>
              <CalculatorKey className="key-3" onPress={() => this.inputDigit(3)}>3</CalculatorKey>
              <CalculatorKey className="key-4" onPress={() => this.inputDigit(4)}>4</CalculatorKey>
              <CalculatorKey className="key-5" onPress={() => this.inputDigit(5)}>5</CalculatorKey>
              <CalculatorKey className="key-6" onPress={() => this.inputDigit(6)}>6</CalculatorKey>
              <CalculatorKey className="key-7" onPress={() => this.inputDigit(7)}>7</CalculatorKey>
              <CalculatorKey className="key-8" onPress={() => this.inputDigit(8)}>8</CalculatorKey>
              <CalculatorKey className="key-9" onPress={() => this.inputDigit(9)}>9</CalculatorKey>
            </div>
          </div>
          <div className="operator-keys">
            <CalculatorKey className="key-divide" onPress={() => this.performOperation('/')}>÷</CalculatorKey>
            <CalculatorKey className="key-multiply" onPress={() => this.performOperation('*')}>×</CalculatorKey>
            <CalculatorKey className="key-subtract" onPress={() => this.performOperation('-')}>−</CalculatorKey>
            <CalculatorKey className="key-add" onPress={() => this.performOperation('+')}>+</CalculatorKey>
            <CalculatorKey className="key-equals" onPress={() => this.performOperation('=')}>=</CalculatorKey>
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <Calculator/>,
  document.getElementById('app')
)
