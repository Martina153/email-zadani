console.log('funguju');


/*//V souboru index.js vytvořte funkci bez parametrů s názvem goodbye. 
//Tato funkce vloží do odstavce s třídou email__closing rozloučení „Na shledanou“.
//Otevřete stránku v prohlížeči a zavolejte funkci v konzoli. 
//Ověřte, že správně změnila pozdrav na konci e-mailu.
function goodbye () {
    const goodbye = document.querySelector('.email__closing')

    if (goodbye===null) {
        return False 
    } else {
        goodbye.innerHTML="Na shledanou"
        return true 
    }
}

//Končit e-mail slovy „Na shledanou“ je nezdvořilé. 
//Přidejte proto do funkce goodbye parametr představující jméno pisatele e-mailu. 
//Funkce do posledního odstavce vloží koncový pozdrav i se jménem. Příklad použití:
function goodbye2 (sender) {
    const goodbye = document.querySelector('.email__closing')

    if (goodbye===null) {
        return False 
    } else {
        goodbye.textContent=`Na shledanou ${sender}`
        return true 
    }
}

//Tato funkce ze stránky vybere DOM element představující předmět e-mailu a nastaví jeho obsah na řetězec, který přišel v parametru. 
//Zavolejte funkci z konzole a vykoušejte si nastavit předmět e-mailu na různé řetězce.
function fillSubject(subjectChange) {
    const subject = document.querySelector('.email__subject')
    subject.innerHTML = subjectChange
}
//Napište funkci fillBody s jedním parametrem body, která ze stránky vybere DOM element představující tělo e-mailu a nastaví jeho obsah dle hodnoty parametru. 
//Funkci vyzkoušejte v konzoli.

function fillBody(body) {
    const bodyEl = document.querySelector('.email__body')
    bodyEl.innerHTML = body
    const closingElm = document.querySelector('.email__closing')
	closingElm.textContent = goodbye(name)
}

//!!! you can not call the element of remain as she is inside of if 
//if its before then you can again call her 
if (age < 18) {
	const remains = 18 - age

	if (remains <= 2) {
		document.body.innerHTML = '<p>Už to máš za pár</p>'
	} else if (remains <= 5) {
		document.body.innerHTML = `<p>Ještě si počkáš ${remains} let</p>`
	} else {
		document.body.innerHTML = '<p>Utíkej za mamkou</p>'
	}
} else {
	document.body.innerHTML = '<p>Vítej mezi dospěláky</p>'
}*/


const name = 'Mississippi'

if (name.length > 5) {
	const name = 'Missi'
	document.body.innerHTML = `<p>${name}</p>`
}

document.body.innerHTML = `<p>${name}</p>`


//ty nemuzes deklarovat parametr uz vo funkcii 