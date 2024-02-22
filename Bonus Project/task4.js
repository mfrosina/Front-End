fetch('data.json')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        const headerHTML = generateHeaderHTML(data.header);
        document.getElementById('header-container').innerHTML = headerHTML;

        const educationHTML = generateEducationHTML(data.education);
        document.getElementById('cv-container').innerHTML = educationHTML;
    })
    .catch(error => console.error('Error fetching data:', error));


function generateHeaderHTML(headerData) {
        return `
                <div class="fade-out">
                    <img src="${headerData.photo}" id="personal-photo" alt="Personal photo" style="width:125px; height:125px; border-radius:50%;">
                </div>
                <h1 id="name"><strong>${headerData.name}</strong></h1>
                <ul id="personal-info">
                    <li><i class="fa fa-envelope" aria-hidden="true"></i> ${headerData.email}</li>
                    <li><i class="fa fa-phone" aria-hidden="true"></i> ${headerData.phone}</li>
                    <li><i class="fa fa-map-marker" aria-hidden="true"></i> ${headerData.location}</li>
                </ul>
            `;
}

function generateEducationHTML(educationData) {
        return `
                <section class="education">
                    <h4>${educationData.title}</h4>
                    <p id="university">
                        <strong>${educationData.university}</strong><br>
                    </p>
                    <p id="specialty">
                        <em><strong>${educationData.specialty}</strong></em><br>
                    </p>
                    <p id="duration">
                        <em>${educationData.duration}</em><br>
                        ${educationData.location}
                    </p>
                </section>
                `;
}
        