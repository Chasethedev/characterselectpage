let heroDiv = document.getElementById('heroDiv');
let heroInfo = document.createElement('p');
let heroPic = document.createElement('div');
let wizardbtn = document.getElementById('wizard')
let warriorbtn = document.getElementById('warrior')
let tankbtn = document.getElementById('tank');
let h1 = document.getElementsByTagName('h1')[0];

let wizardQuoteBtn = document.createElement('button');
wizardQuoteBtn.classList.add('heroQuoteBtnStyle')
wizardQuoteBtn.innerText = 'CLICK FOR HERO\'S  QUOTE';

let warriorQuoteBtn = document.createElement('button');
warriorQuoteBtn.classList.add('heroQuoteBtnStyle')
warriorQuoteBtn.innerText = 'CLICK FOR HERO\'S  QUOTE';

let tankQuoteBtn = document.createElement('button');
tankQuoteBtn.classList.add('heroQuoteBtnStyle')
tankQuoteBtn.innerText = 'CLICK FOR HERO\'S  QUOTE';

class Hero {
	constructor(type, ability){
		this.type = type;
		this.ability = ability;
	}
	introduce() {
		heroDiv.appendChild(heroInfo)
		heroInfo.innerText = `You have chosen a ${this.type}! The ${this.type} uses ${this.ability} for his abilities!`;

	}
}

class Wizard extends Hero {
	constructor(type, ability) {
		super(type, ability)
	}
	quote() {
		heroInfo.innerText = `"A foolish ${this.type} uses ${this.ability} ignorantly and impatiently. Doing so will surely result in umimagenable consequences. Vast knowledge is vast power and vast power requires vast retraint."`;
	}
};

class Warrior extends Hero {
	constructor(type, ability) {
		super(type, ability)
	}
	quote() {
		heroInfo.innerText = `"Let he who opposes that what is just and right meet the worlds greatest ${this.type} and fall upon ${this.ability}!" Let the immoral feel the power of the virtuous. Let the merciless die mercilessly.`;
	}
}

class Tank extends Hero {
	constructor(type, ability) {
		super(type, ability)
	}
	quote() {
		heroInfo.innerText = `"I am a ${this.type} that lives by a code. Let my ${this.ability} offer protection to all of those who accompany me into battle. None of my sworn brothers shall fall before I fall myself!"`;
	}
}

const heroWizard = new Wizard('wizard', 'various forms of magic')
const heroWarrior = new Warrior('warrior', 'his sword and axe')
const heroTank = new Tank('tank', 'enchanted armor and natural damage resistance')

wizardbtn.addEventListener('click', function(){
	heroWizard.introduce()
	h1.innerText ='Wizard';
	heroDiv.appendChild(wizardQuoteBtn);
	heroDiv.appendChild(heroPic)
	heroPic.classList.remove('warriorbg', 'tankbg')
	heroPic.classList.add('heroPicStyle', 'wizardbg');

	if(warriorQuoteBtn || tankQuoteBtn) {
		warriorQuoteBtn.remove()
		tankQuoteBtn.remove()
	}
		wizardQuoteBtn.addEventListener('click', function(){
			wizardQuoteBtn.remove()
			heroWizard.quote();
		})
});

warriorbtn.addEventListener('click', function(){
	heroWarrior.introduce()
	h1.innerText ='Warrior';
	heroDiv.appendChild(warriorQuoteBtn);
	heroDiv.appendChild(heroPic)
	heroPic.classList.remove('wizardbg', 'tankbg')
	heroPic.classList.add('heroPicStyle', 'warriorbg');
	if(wizardQuoteBtn || tankQuoteBtn) {
		wizardQuoteBtn.remove()
		tankQuoteBtn.remove()
	}
		warriorQuoteBtn.addEventListener('click', function(){
			warriorQuoteBtn.remove();
			heroWarrior.quote();
	})
});

tankbtn.addEventListener('click', function(){
	heroTank.introduce()
	h1.innerText ='Tank';
	heroDiv.appendChild(tankQuoteBtn);
	heroDiv.appendChild(heroPic)
	heroPic.classList.remove('warriorbg', 'warriorbg')
	if(warriorQuoteBtn || wizardQuoteBtn) {
		warriorQuoteBtn.remove()
		wizardQuoteBtn.remove()
	}
	heroPic.classList.add('heroPicStyle', 'tankbg')
		tankQuoteBtn.addEventListener('click', function(){
			tankQuoteBtn.remove();
			heroTank.quote();
	})
});


// heroDiv.removeChild(wizardQuoteBtn);
// heroDiv.removeChild(tankQuoteBtn);
// heroDiv.removeChild(warriorQuoteBtn);


