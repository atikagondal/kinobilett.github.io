

JS

let Billetter = [];

function kjopBillett() {

    const Antall = document.getElementById("Antall").value;
    const Valg = document.getElementById("film").value;
    const Fornavn = document.getElementById("Fornavn").value;
    const Etternavn = document.getElementById("Etternavn").value;
    const Telefonnr = document.getElementById("Telefonnr").value;
    const Epost = document.getElementById("Epost").value;

    Billett = {
        Valg: Valg,
        Antall: Antall,
        Fornavn: Fornavn,
        Etternavn: Etternavn,
        Telefonnr: Telefonnr,
        Epost: Epost
    };


    console.log("KjopBillett(): "+Billetter)

    let feilmelding = 0;
    if (Billett.Valg === ""){
        document.getElementById("feilValg").innerHTML="Velg en film"
        feilmelding++;
    }else {
        document.getElementById("feilValg").innerHTML=" ";
    }
    if (Billett.Antall <= 0 || isNaN(Number(Billett.Antall))) {
        document.getElementById("feilAntall").innerHTML = "Skriv inn antall hvis tomt"
        feilmelding++;
    } else {
        document.getElementById("feilAntall").innerHTML = " ";

    }
    if (Billett.Fornavn === "") {
        document.getElementById("feilFornavn").innerHTML = "Skriv inn et fornavn hvis tomt"
        feilmelding++
    } else {
        document.getElementById("feilFornavn").innerHTML = "";
    }
    if (Billett.Etternavn === "") {
        document.getElementById("feilEtternavn").innerHTML = "Skriv inn et etternavn hvis tomt"
        feilmelding++
    } else {
        document.getElementById("feilEtternavn").innerHTML = "";
    }
    if (Billett.Telefonnr === "") {
        document.getElementById("feilTelefonnr").innerHTML = "Skriv inn en telefonnummer hvis tomt"
        feilmelding++
    } else {
        document.getElementById("feilTelefonnr").innerHTML = "";
    }
    if (Billett.Epost === "") {
        document.getElementById("feilEpost").innerHTML = "Skriv inn epost adresse hvis tomt"
        feilmelding++
    } else {
        document.getElementById("feilEpost").innerHTML = "";
    }

    if (feilmelding === 0) {
        Billetter.push(Billett)
        console.log(Billetter + "tidlig")
        TomUtAlleBilletter()
    }
    visAllebilletter()
}


function visAllebilletter() {
    console.log(Billetter)
    let ut = "<table> <tr> " +
        "<th>Velg film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnr</th><th>Epost</th></tr>";
    for (let enbillett of Billetter) {
        ut += "<tr>";
        ut +=  "<td>"+enbillett.Valg+"</td><td>" + enbillett.Antall + "</td><td>" + enbillett.Fornavn + "</td><td>" + enbillett.Etternavn + "</td><td>" + enbillett.Telefonnr
            + "</td><td>" + enbillett.Epost + "</td>";
        ut += "</tr>";
    }
    ut += "</table>";
    document.getElementById("Billett").innerHTML=ut;

}

function TomUtAlleBilletter() {
    document.getElementById("Antall").value = ""
    document.getElementById("Fornavn").value = ""
    document.getElementById("Etternavn").value = ""
    document.getElementById("Telefonnr").value = ""
    document.getElementById("Epost").value = ""
}

function slettAlleBilletter() {
    Billetter = []
    console.log("hei")
    document.getElementById("Billett").innerHTML = "";
}


