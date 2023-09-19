export default function initQuestions() {
  const questions = document.querySelectorAll('.questions button');
  function activeQuestion(event) {
    const question = event.currentTarget;
    const controls = question.getAttribute("aria-controls");
    const response = document.getElementById(controls);
    response.classList.toggle('active');
  }
  function eventQuestions(question) {
    question.addEventListener('click', activeQuestion);
  }
  questions.forEach(eventQuestions);
}