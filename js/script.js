document.addEventListener("DOMContentLoaded", function() {
    const productForm = document.getElementById("product-form");
    const productList = document.getElementById("product-list");

    productForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const productName = document.getElementById("product-name").value;
        const productDescription = document.getElementById("product-description").value;
        const productValue = parseFloat(document.getElementById("product-value").value).toFixed(2);
        const productAvailable = document.getElementById("product-available").value;

        if (productName && productDescription && productValue) {
            const newRow = document.createElement("tr");
            newRow.innerHTML = `
                <td>${productName}</td>
                <td>R$ ${productValue}</td>
                <td>${productDescription}</td>
                <td>${productAvailable}</td>
            `;
            productList.appendChild(newRow);
            productForm.reset();
        } else {
            alert("Por favor, preencha todos os campos do formulário.");
        }
    });

    addProductButton.addEventListener("click", function() {
        productForm.style.display = "block";
    });
});
