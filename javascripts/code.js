document.addEventListener("DOMContentLoaded", function() {
    let elements = document.querySelectorAll(".star1, .star2, .star3, .star4, .star5, .star6, .star7");

    elements.forEach(function(element) {
        element.draggable = true;

        element.addEventListener("dragstart", function(event) {
            event.dataTransfer.setData("text/plain", event.target.id);
        });

        element.addEventListener("dragover", function(event) {
            event.preventDefault();
        });

        element.addEventListener("drop", function(event) {
            event.preventDefault();
            let data = event.dataTransfer.getData("text");
            let draggedElement = document.getElementById(data);
            event.target.appendChild(draggedElement);
        });
    });
});
