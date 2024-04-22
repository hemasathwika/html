


let courses = [];

function addSubject() {
    const courseHtml = `
    <div class="course">
        <div class="form-group">
            <label for="subjectName">Subject Name:</label>
            <input type="text" class="subjectName" required>
        </div>
        <div class="form-group">
            <label for="credits">Enter Credits:</label>
            <input type="number" class="credits" required>
        </div>
        <div class="form-group">
            <label for="grade">Enter Grade:</label>
            <input type="text" class="grade" required>
        </div>
    </div>
    `;
    document.getElementById('coursesContainer').insertAdjacentHTML('beforeend', courseHtml);
}

function calculateCGPA() {
    courses = [];
    const courseElements = document.querySelectorAll('.course');
    courseElements.forEach(courseElement => {
        const subjectName = courseElement.querySelector('.subjectName').value;
        const credits = parseFloat(courseElement.querySelector('.credits').value);
        const grade = courseElement.querySelector('.grade').value.toUpperCase();
        const gradePoints = calculateGradePoints(grade);
        if (!isNaN(credits) && credits > 0 && gradePoints !== -1) {
            courses.push({ subjectName, credits, gradePoints });
        } else {
            alert('Please enter valid credits and grade for all subjects!');
            return;
        }
    });
    
    if (courses.length === 0) {
        alert('Please add subjects before calculating CGPA!');
        return;
    }

    const totalCredits = courses.reduce((total, course) => total + course.credits, 0);
    const totalGradePoints = courses.reduce((total, course) => total + (course.credits * course.gradePoints), 0);
    const cgpa = (totalGradePoints / totalCredits).toFixed(2);
    document.getElementById('result').innerText = `Your CGPA: ${cgpa}`;
}

function calculateGradePoints(grade) {
    switch (grade) {
        case 'A+':
            return 9.00;
        case 'A':
            return 9.00;
        case 'A-':
            return 8.67;
        case 'B+':
            return 8.33;
        case 'B':
            return 7.67;
        case 'B-':
            return 7.00;
        case 'C+':
            return 6.33;
        case 'C':
            return 6.00;
        case 'C-':
            return 5.67;
        case 'D+':
            return 5.33;
        case 'D':
            return 4.00;
        case 'F':
            return 0.00;
        default:
            return -1; // Invalid grade
    }
}
