document.addEventListener("DOMContentLoaded", () => {
    
    const formType = document.getElementById("form-type");
    const solicitudForm = document.getElementById("sollicitud-form");
    const incidenciaForm = document.getElementById("incidencia-form");

    function mostrarFormulario() {
        if (formType.value === "sollicitud") {
            solicitudForm.style.display = "block";
            incidenciaForm.style.display = "none";
        } else if (formType.value === "incidencia") {
            solicitudForm.style.display = "none";
            incidenciaForm.style.display = "block";
        }
    }

    formType.addEventListener("change", mostrarFormulario);

    mostrarFormulario();
});
document.addEventListener("DOMContentLoaded", () => {
    const edatInput = document.getElementById("edat");
    const edatValor = document.getElementById("edat-valor");

    edatValor.textContent = edatInput.value;

    edatInput.addEventListener("input", () => {
        edatValor.textContent = edatInput.value;
    });
});