var questionType = {
  text: 0,
  radio: 1,
  check: 2
};

let app = new Vue({
  el: '#app',
  data: {
    questionType: questionType,
    testLoaded: false,
    testStarted: false,
    testFinished: false,
    currentQuestionIndex: 0,
    currentQuestion: undefined,

    answerText: undefined,
    answerRadio: undefined,
    answerCheck: [],

    goodAnswersCount: 0
  },
  methods: {
    loadTest: function () {
      this.testData = JSON.parse(atob(testData));
      this.currentQuestion = this.testData.questions[this.currentQuestionIndex];
      this.testLoaded = true;
    },
    doAnswer: function () {
      let currentQuestion = this.currentQuestion;
      if (currentQuestion.questionType == questionType.text) {
        if (currentQuestion.trueAnswer.toLowerCase() == this.answerText.toLowerCase()) {
          this.goodAnswersCount += 1;
        }
      } else if (currentQuestion.questionType == questionType.radio) {
        if (currentQuestion.trueAnswer == this.answerRadio) {
          this.goodAnswersCount += 1;
        }
      } else if (currentQuestion.questionType == questionType.check) {
        let correctAnswer = currentQuestion.trueAnswers;
        correctAnswer.sort();
        this.answerCheck.sort();
        let radioAnswerTrue = true;
        if (this.answerCheck.length != correctAnswer.length) {
          radioAnswerTrue = false;
        } else {
          for (let i = 0; i < correctAnswer.length; i++) {
            if (this.answerCheck[i] != correctAnswer[i]) {
              radioAnswerTrue = false;
            }
          }
        }
        if (radioAnswerTrue) {
          this.goodAnswersCount += 1;
        }
      }

      this.resetAnswers();

      if (this.currentQuestionIndex + 1 < this.testData.questions.length) {
        this.currentQuestionIndex += 1;
        this.currentQuestion = this.testData.questions[this.currentQuestionIndex];
      } else {
        this.testFinished = true;
      }
    },
    resetAnswers: function () {
      this.answerText = undefined;
      this.answerRadio = undefined;
      this.answerCheck = [];
    }
  },
  created: function () {
    this.loadTest();
  }
});
