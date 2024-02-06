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

        if (billett.valg === "") {
            document.getElementById("feilmelding").innerHTML = "Velg en film";
            feilmelding++;
        } else {
            document.getElementById("feilmelding").innerHTML = "";
        }
        if (billett.antall <= 0 || isNaN(Number(billett.antall))) {
            document.getElementById("feilantall").innerHTML = "Skriv inn antall hvis tomt";
            feilmelding++;
        } else {
            document.getElementById("feilantall").innerHTML = "";
        }

        if (billett.fornavn === "") {
            document.getElementById("feilfornavn").innerHTML = "Skriv inn fornavnet hvis tomt";
            feilmelding++;
        } else {
            document.getElementById("feilfornavn").innerHTML = "";
        }
        if (billett.etternavn =="") {
            document.getElementById("feiletternavn").innerHTML = "Skriv inn etternavnet hvis tomt";
            feilmelding++;
        } else {
            document.getElementById("feiletternavn").innerHTML = "";
        }

        if (billett.telefon === "" || isNaN(Number(billett.telefon))) {
            document.getElementById("feiltlf").innerHTML = "Skriv inn et gyldig telefon nummer";
            feilmelding++;
        } else {
            document.getElementById("feiltlf").innerHTML = "";
        }
        if (billett.epost === "") {
            document.getElementById("feilepost").innerHTML = "Skriv inn antall hvis tomt";
            feilmelding++;
        } else {
            document.getElementById("feilepost").innerHTML = "";
        }

        if (feilmelding === 0) {
            bilettliste.push(billett);
            console.log(bilettliste + " tidlig");
            TomUtAlleBilletter();
        }
        visAllebilletter();
    }

function visAllebilletter() {
        // Loop gjennom alle billettene og vis dem på en eller annen måte
        for (let i = 0; i < bilettliste.length; i++) {
            let billett = bilettliste[i];
            console.log("Film: " + billett.valg + ", Antall: " + billett.antall + ", Navn: " + billett.fornavn + " " + billett.etternavn + ", Telefon: " + billett.telefon + ", Epost: " + billett.epost);
        }
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
    