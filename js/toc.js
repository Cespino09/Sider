
document.addEventListener("DOMContentLoaded", function() {
    const toc = document.getElementById("toc");
    const headings = document.querySelectorAll("main h2");

    headings.forEach(h2 => {
        const id = h2.id || h2.textContent.toLowerCase().replace(/\s+/g, '-');
        h2.id = id;
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = "#" + id;
        a.innerHTML = `<i class="fas fa-circle"></i> ${h2.textContent}`;
        li.appendChild(a);
        toc.appendChild(li);
    });

    window.addEventListener("scroll", () => {
        let current = "";
        headings.forEach(h2 => {
            const sectionTop = h2.offsetTop - 90;
            if (pageYOffset >= sectionTop) {
                current = h2.id;
            }
        });

        document.querySelectorAll("#toc li").forEach(li => {
            li.classList.remove("active");
            if (li.querySelector("a").getAttribute("href") === "#" + current) {
                li.classList.add("active");
            }
        });
    });

    document.getElementById("tocSearch").addEventListener("input", function() {
        const filter = this.value.toLowerCase();
        document.querySelectorAll("#toc li").forEach(li => {
            const text = li.textContent.toLowerCase();
            li.style.display = text.includes(filter) ? "" : "none";
        });
    });
});
