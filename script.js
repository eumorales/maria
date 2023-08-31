document.addEventListener("DOMContentLoaded", function() {
    const startButton = document.getElementById("startButton");
    const programSelector = document.getElementById("programSelector");

    startButton.addEventListener("click", function() {
        const selectedProgram = programSelector.value;
        
        switch (selectedProgram) {
            case "moringa":
                window.open('https://maria.gilbertomorales.com/carnemoringa', '_blank');
                break;
            case "contador":
                window.open('https://maria.gilbertomorales.com/coquitos', '_blank');
                break;
            case "flappy":
                window.open('https://maria.gilbertomorales.com/flappycoquitos', '_blank');
                break;
            case "maricoquitos":
                window.open('https://maria.gilbertomorales.com/maricoquitos', '_blank');
                break;
            default:
                alert("Inválido.");
        }
    });
});
