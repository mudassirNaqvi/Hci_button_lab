let count = 0;

const btn = document.getElementById('actionBtn');
const status = document.getElementById('status');

btn.addEventListener("click", function () {
    count++;

    // Feedback
    btn.classList.add('click-feedback');
    setTimeout(() => btn.classList.remove('click-feedback'), 300);

    // Mapping
    status.textContent = `Processed ${count} time(s)`;

    // Constraint + Signifier
    if (count >= 3) {
        btn.disabled = true;
        btn.classList.add('constrained', 'disabled-signifier');
        status.textContent = "Limit reached!";
    }
});
