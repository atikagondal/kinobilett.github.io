let bilettliste = []

// Her lages funksjonen for å kjøpe billett
function kjopBillett() {
    let feilmelding = 0; // Definerer og initialiserer feilmelding-variabelen
    // Henter verdier fra input-feltene
    let valg = document.getElementById("film").value;
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



    if (billett.valg === "" || billett.valg === "Velg film her"){
        document.getElementById("feilmelding").innerHTML="Velg en film"
        feilmelding++;
    }else {
        document.getElementById("feilmelding").innerHTML="";
    }

    //Validere input (implementere valideringsfunksjon for hvert felt)
    if (!antall || isNaN(parseInt(antall)) || parseInt(antall) <= 0) {
        document.getElementById("feilantall").innerHTML = "Skriv inn antall hvis tomt(Kun tall!)"
        feilmelding++;
    } else {
        document.getElementById("feilantall").innerHTML = " ";

    }


    // Validering for fornavn (kun bokstaver tillatt)
    let fornavnRegex = /^[a-zA-Z]+$/;
    if (!fornavn || !fornavnRegex.test(fornavn)) {
        document.getElementById("feilfornavn").innerHTML = "Skriv inn gyldig fornavn(Kun bokstaver tilatt)"
        feilmelding++;
    } else {
        document.getElementById("feilfornavn").innerHTML = " ";

    }


    // Validering for etternavn (kun bokstaver tillatt)
    let etternavnRegex = /^[a-zA-Z]+$/;
    if (!etternavn || !etternavnRegex.test(etternavn)) {
        document.getElementById("feiletternavn").innerHTML = "Skriv inn gyldig etternavn(Kun bokstaver tilatt)"
        feilmelding++;
    } else {
        document.getElementById("feiletternavn").innerHTML = " ";

    }
    // Validering for telefonnummer (kun tall tillatt)
    let telefonRegex = /^\d+$/;
    if (!telefon || !telefonRegex.test(telefon)) {
        document.getElementById("feiltlf").innerHTML = "Skriv inn gyldig telefon nummer"
        feilmelding++;
    } else {
        document.getElementById("feiltlf").innerHTML = " ";

    }

    // Validering for e-postadresse
    let epostRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!epost || !epostRegex.test(epost)) {
        document.getElementById("feilepost").innerHTML = "Skriv inn gyldig epost"
        feilmelding++;
    } else {
        document.getElementById("feilepost").innerHTML = " ";

    }

    // Hvis det er feilmeldinger, avbryt kjøpBillett-funksjonen
    if (feilmelding > 0) {
        return;
    }


    
    // Legg til billett i billettliste
    bilettliste.push(billett);
    // Vis billettene
    visAlleBilletter();
    TomUtAlleBilletter();
}

// Funksjon for å vise alle billettene på nettsiden
function visAlleBilletter() {
    let billettlisteElement = document.getElementById("billettliste");
    billettlisteElement.innerHTML = ""; // Fjerner eksisterende innhold før vi legger til nytt

    let ut = "<table> <tr> " +
        "<th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnr</th><th>Epost</th></tr>";
    for (let billett of bilettliste) {
        ut += "<tr>";
        ut += "<td>" + billett.valg + "</td><td>" + billett.antall + "</td><td>" + billett.fornavn + "</td><td>" + billett.etternavn + "</td><td>" + billett.telefon
            + "</td><td>" + billett.epost + "</td>";
        ut += "</tr>";
    }
    ut += "</table>";

    billettlisteElement.innerHTML = ut; // Legger til tabellen med billettinformasjonen på nettsiden
}

//metoden for å tømme alle biletter etter at kjøp biletter er trykket på kjøp billett
function TomUtAlleBilletter() {
    document.getElementById("film").selectedIndex = 0;
    document.getElementById("antall").value = "";
    document.getElementById("fornavn").value = "";
    document.getElementById("etternavn").value = "";
    document.getElementById("tlf").value = "";
    document.getElementById("epost").value = "";
}



//metoden for å slette alle biletter etter at slett billetter er trykket på 
function slettAlleBiletter() {
    bilettliste = [];
    console.log("hei");
    document.getElementById("billettliste").innerHTML = "";
}