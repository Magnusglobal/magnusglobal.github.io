document.getElementById("websiteBtn").onclick = function() {
    window.open("https://www.magnusglobal.de"); 
};

document.getElementById("callBtn").onclick = function() {
    window.location.href = "tel:+11234445555"; // Format: tel:+<countrycode><number without spaces or special chars>
};

document.getElementById("emailBtn").onclick = function() {
    const email = "info@magnusglobal.de";
    const subject = "General Inquiry";
    const body = "Write your text here";
    
    const mailto = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
};

document.getElementById("downloadPdfBtn").onclick = function() {
    var url = "https://example.com/yourfile.pdf"; // URL to the PDF
    var a = document.createElement("a");
    a.href = url;
    a.download = "Magnus Global Product Catalog 2025.pdf"; // Filename
    document.body.appendChild(a); // Required for Firefox
    a.click();
    a.remove(); // Clean up
};

document.getElementById("instagramBtn").onclick = function() {
    window.open("https://www.instagram.com/magnusglobal.ig/"); 
};

document.getElementById("youtubeBtn").onclick = function() {
    window.open("https://www.youtube.com/@Magnus.Global"); 
};

document.getElementById("tiktokBtn").onclick = function() {
    window.open("https://www.tiktok.com/@magnusglobal"); 
};

document.getElementById("facebookBtn").onclick = function() {
    window.open("https://www.magnusglobal.de"); 
};

document.getElementById("linkedinBtn").onclick = function() {
    window.open("https://www.magnusglobal.de"); 
};

document.getElementById("whatsappBtn").onclick = function() {
    window.open("https://www.magnusglobal.de"); 
};

document.addEventListener("DOMContentLoaded", function() {
    const lazyImages = document.querySelectorAll(".lazy-image");
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.classList.add("loaded");
                observer.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => imageObserver.observe(img));
});