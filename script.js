function generateLetter() {
    const name = document.getElementById('name').value;
    const role = document.getElementById('role').value;
    const company = document.getElementById('company').value;
    const skills = document.getElementById('skills').value;

    if (!name || !role || !company || !skills) {
        alert("Please fill all fields!");
        return;
    }

    // Static template jo bina AI ke chalega
    const letter = `Dear Hiring Manager,
    
    I am writing to express my interest in the ${role} position at ${company}. 
    With my skills in ${skills}, I am confident that I can contribute effectively to your team.
    
    Sincerely,
    ${name}`;

    document.getElementById('output').innerText = letter;
    document.getElementById('result-area').style.display = 'block';
}

function copyToClipboard() {
    const text = document.getElementById('output').innerText;
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
}