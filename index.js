// først lages en variabel som jeg lagrer billetter i
let bilettliste = [];

// her lages funksjonen for å kjøpe bilett
    function kjopBillett() {
        // Henter verdier fra input-feltene
        let feilmelding=0;
        let valg = document.getElementById("filmDropdown").value;
        let antall = document.getElementById("antall").value;
        let fornavn = document.getElementById("fornavn").value;
        let etternavn = document.getElementById("etternavn").value;
        let telefon = document.getElementById("tlf").value;
        let epost = document.getElementById("epost").value;

        //oppretter billettobjektet
        let billett = {
            valg: valg,
            antall: antall,
            fornavn: fornavn,
            etternavn: etternavn,
            telefon: telefon,
            epost: epost
        };
    
    


        console.log("KjopBillett(): " + billett);

        //Validere input (implementere valideringsfunksjon for hvert felt)
    if (!antall || isNaN(parseInt(antall)) || parseInt(antall) <= 0) {
        feilmeldingElement.innerText = 'Vennligst fyll ut alle felt før du kjøper bilett';
        return;
    }
    // Validering for fornavn og etternavn (kun bokstaver tillatt)
    let navnRegex = /^[a-zA-Z]+$/;
    if (!fornavn || !navnRegex.test(fornavn) || !etternavn || !navnRegex.test(etternavn)) {
        feilmeldingElement.innerText = 'Vennligst skriv inn gyldige navn (kun bokstaver tillatt).';
        return;
    }

    // Validering for telefonnummer (kun tall tillatt)
    let telefonRegex = /^\d+$/;
    if (!telefon || !telefonRegex.test(telefon)) {
        feilmeldingElement.innerText = 'Vennligst skriv inn et gyldig telefonnummer (kun tall tillatt).';
        return;
    }

    // Validering for e-postadresse
    let epostRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!epost || !epostRegex.test(epost) || !gyldigEpost(epost)) {
        feilmeldingElement.innerText = 'Vennligst skriv inn en gyldig e-postadresse.';
        return;
    }


    function visAllebilletter() {
        let billettlisteElement = document.getElementById("billettliste");
        billettlisteElement.innerHTML = ""; // Fjerner eksisterende innhold før vi legger til nytt
    
        let ut = "<table> <tr> " +
            "<th>Velg film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnr</th><th>Epost</th></tr>";
        for (let billett of bilettliste) {
            ut += "<tr>";
            ut += "<td>" + billett.valg + "</td><td>" + billett.antall + "</td><td>" + billett.fornavn + "</td><td>" + billett.etternavn + "</td><td>" + billett.telefon
                + "</td><td>" + billett.epost + "</td>";
            ut += "</tr>";
        }
        ut += "</table>";
    
        billettlisteElement.innerHTML = ut; // Legger til tabellen med billettinformasjonen på nettsiden
    }
    



function TomUtAlleBilletter() {
    document.getElementById("antall").value = "";
    document.getElementById("fornavn").value = "";
    document.getElementById("etternavn").value = "";
    document.getElementById("tlf").value = "";
    document.getElementById("epost").value = "";
}

function slettAlleBiletter() {
    bilettliste = [];
    console.log("hei");
    document.getElementById("billettliste").innerHTML = "";
}
    