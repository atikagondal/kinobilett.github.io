// her lager vi en javascript kode som skal knyttes sammen med html filen

//først lages en variabel som jeg lagrer billetter i
let bilettliste = [];

// her lages funksjonen for å kjøpe bilett
function kjopbilett() {
    //Henter verdier fra input feltet
    let antall = document.getElementsByName('antall')[0].value;
    let fornavn = document.getElementById('navn').value;
    let etternavn = document.getElementsByName('etternavn')[0].value;
    let telefon = document.getElementsByName('telefon')[0].value;
    let epost = document.getElementsByName('epost')[0].value;

    //Validere input (implementere valideringsfunksjon for hvert felt)
    if (!antall || isNaN(antall) || parseInt(antall) <= 0) {
        alert('Vennligst fyll ut alle felt før du kjøper bilett');
        return;
    }
    // Validering for fornavn og etternavn (kun bokstaver tillatt)
    let navnRegex = /^[a-zA-Z]+$/;
    if (!fornavn || !navnRegex.test(fornavn) || !etternavn || !navnRegex.test(etternavn)) {
        alert('Vennligst skriv inn gyldige navn (kun bokstaver tillatt).');
        return;
    }

    // Validering for telefonnummer (kun tall tillatt)
    let telefonRegex = /^\d+$/;
    if (!telefon || !telefonRegex.test(telefon)) {
        alert('Vennligst skriv inn et gyldig telefonnummer (kun tall tillatt).');
        return;
    }

    // Validering for e-postadresse
    let epostRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!epost || !epostRegex.test(epost)) {
        alert('Vennligst skriv inn en gyldig e-postadresse.');
        return;
    }


    //opprett billettobjektet
    let billett = {
        antall: antall,
        fornavn: fornavn,
        etternavn: etternavn,
        telefon: telefon,
        epost: epost
    };

    //legger til billetter i listen med push
    bilettliste.push(billett);
    // så oppdaterer vi listen av billetten
    visbillettliste();

    //for å tømme input feltene
    document.getElementsByName('antall')[0].value = '';
    document.getElementById('navn').value = '';
    document.getElementsByName('etternavn')[0].value = '';
    document.getElementsByName('telefon')[0].value = '';
    document.getElementsByName('epost')[0].value = '';
}

//funksjon for å vise listen av billettene
function visbillettliste() {
    let elementliste = document.getElementById('billettliste');
    elementliste.innerHTML = '';

    for (let i = 0; i < bilettliste.length; i++) {
        let billett = bilettliste[i];
        let billettTekst = 'Antall: ' + billett.antall + ', Fornavn: ' + billett.fornavn + ' , Etternavn: ' + billett.etternavn + ', Telefon: ' + billett.telefon + ', Epost: ' + billett.epost;
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(billettTekst));
        elementliste.appendChild(li);
    }
}

// så har vi funksjonen til å slette alle bilettene
function slettAlleBiletter() {
    bilettliste = [];
    visbillettliste();
}

//Validering av epost
function gyldigEpost(epost) {
    let epostRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return epostRegex.test(epost);
}

const fields = ['Fornavn', 'Etternavn', 'Telefon', 'Epost'];

for (let i = 0; i < fields.length; i++) {
    let inputField = document.createElement('input');
    inputField.type = 'text';
    inputField.placeholder = fields[i];
    inputField.id = fields[i].toLowerCase();

    let label = document.createElement('label');
    label.textContent = fields[i] + ':';

    document.getElementById('inputFields').appendChild(label);
    document.getElementById('inputFields').appendChild(inputField);

    // Legg til <br> mellom hvert inputfelt
    document.getElementById('inputFields').appendChild(document.createElement('br'));
}
