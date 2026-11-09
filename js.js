    function ellenorzes(){
        let email = document.getElementById('email').value.trim()
        let jelszo = document.getElementById('jelszo').value.trim()
        let jelszoujra = document.getElementById('jelszoUjra').value.trim()


            const hiba = document.getElementById("hibafurtok")
            try {
                if (!emailhelyes(email)) throw new Error();
                if (!jelszoEllenorzes(jelszo)) throw new Error();
                if (!jelszoAzonos(jelszo, jelszoujra)) throw new Error();

                hiba.textContent = "Sikeres regisztráció!";
            } catch {
                return false;
            }
    }

    function emailhelyes(email){
        const hiba = document.getElementById("hibafurtok")
        const ekezet = /[áéíóöőúűÁÉÍÓÖŐÚŰ]/;

        try {
            if (email == "") throw "Üresek az email mező!"
            if (!email.match("@")) throw "Nem tartalmaz @ -t az email"
            if (ekezet.test(email)) throw "Nem tartalmazhat ékezetes karaktert az email"
        } catch (error) {
            hiba.innerHTML = error
            return false
        }
        return true
    }

function jelszoEllenorzes(jelszo){
    const hiba = document.getElementById("hibafurtok")
    const format = /[!@#$%^&*(),.?":{}|<>]/;

    try {
        if (jelszo.length < 8) throw "Nem elég hosszú a jelszó"
        if (jelszo.toLowerCase() === jelszo) throw "Nem tartalmaz nagybet űt a jelszó"
        if (!format.test(jelszo)) throw "Nem tartalmaz speciális karaktert a jelszó"
        if (!/\d/.test(jelszo)) throw "Nem tartalmaz számot a jelszó!"
    } catch (error) {
        hiba.innerHTML = error
        return false
    }
    return true
}

function jelszoAzonos(jelszo,jelszoujra){
    const hiba = document.getElementById("hibafurtok")

    try {
        if(!jelszo == jelszoujra) throw  "A két jelszó nem egyezik"
    } catch (error) {
        hiba.innerHTML = error
        return false
    }
    return true

}