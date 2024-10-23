var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
form.addEventListener("submit", function (event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    var resumeHTML = "\n<h2><b>Editable Resume</b></h2>\n<h3>personal information</h3>\n    <p><b>Name:</b><span> contenteditable=\"true\">".concat(name, "</span></p>\n    <p><b>Email:</b><span> contenteditable=\"true\">").concat(email, "</p>\n    <P><b>phone:</b><span> contenteditable=\"true\">").concat(phone, "</p>\n\n    <h3>education</h3>\n    <p contenteditable=\"true\">").concat(education, "</p>\n\n     <h3>experience</h3>\n    <p contenteditable=\"true\">").concat(experience, "</p>\n\n     <h3>skills</h3>\n    <p contenteditable=\"true\">").concat(skills, "</p>\n    ");
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error("this resume element display is missing.");
    }
});
