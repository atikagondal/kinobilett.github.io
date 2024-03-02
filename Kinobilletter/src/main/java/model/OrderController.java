package model;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;


import java.util.ArrayList;
import java.util.List;


@RestController
public class OrderController {
    List<Purchase> Purchases = new ArrayList<>(); // Opprettelse av en liste for å lagre ordre for billettene
    // Metode for å opprette en ny bestilling når klienten sender en POST-forespørsel
    @PostMapping("/kjopbillett")
    public void Order(Purchase purchase) {
        Purchases.add(purchase);
    }

    // Metode for å hente alle bestillinger når klienten sender en GET-forespørsel
    @GetMapping("/slettAlleBilletter")
    public void slett() {
        Purchases.clear();
        }

}
