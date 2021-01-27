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
      console.log(this.testData);
      this.currentQuestion = this.testData.questions[this.currentQuestionIndex];
      this.testLoaded = true;
    },
    doAnswer: function () {
      if (this.currentQuestionIndex + 1 < this.testData.questions.length) {
        this.currentQuestionIndex += 1;
        this.currentQuestion = this.testData.questions[this.currentQuestionIndex];
      } else {
        this.testFinished = true;
      }
    }
  },
  created: function () {
    this.loadTest();
  }
});
