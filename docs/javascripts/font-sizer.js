document.addEventListener("DOMContentLoaded", function() {
    var content = document.querySelector(".md-content");
    var currentSize = 1; // Representa 1rem (tamanho normal)

    // Função para aumentar a fonte
    document.getElementById("font-increase").addEventListener("click", function() {
        if (currentSize < 1.4) { // Limite máximo de aumento
            currentSize += 0.1;
            content.style.fontSize = currentSize + "rem";
        }
    });

    // Função para diminuir a fonte
    document.getElementById("font-decrease").addEventListener("click", function() {
        if (currentSize > 0.7) { // Limite mínimo de redução
            currentSize -= 0.1;
            content.style.fontSize = currentSize + "rem";
        }
    });
});