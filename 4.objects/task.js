function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
};

Student.prototype.addMarks = function (...marksToAdd) {
    // Если студент отчислен — у него нет свойства marks
    if (!this.marks) {
        return;
    }
    this.marks.push(...marksToAdd);
};

Student.prototype.getAverage = function () {
    // Если оценок нет или студент отчислен
    if (!this.marks || this.marks.length === 0) {
        return 0;
    }
    
    const sum = this.marks.reduce((acc, current) => acc + current, 0);
    return sum / this.marks.length;
};

Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
};