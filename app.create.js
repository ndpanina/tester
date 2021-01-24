var questionType = {
  text: 0,
  radio: 1,
  check: 2
};

var app = new Vue({
  el: '#app',
  data: {
    questionType: questionType,
    showModal: false,
    emptyModalQuestion: {
      index: -1,
      text: '',
      answers: [],
      trueAnswers: [],
      trueAnswer: undefined,
      trueText: undefined,
    },
    newAnswer: '',
    isAddNewAnswer: false,
    modalQuestion: {
      index: -1,
      text: '',
      answers: [],
      trueAnswers: [],
      trueAnswer: undefined,
      trueText: undefined,
    },
    testData: {
      title: 'presidents',
      questions: [
        {
          text: 'who is president usa now?',
          questionType: questionType.radio,
          answers: [
            'baiden',
            'trump'
          ],
          trueAnswer: 'baiden',
          trueAnswers: []
        },
        {
          text: 'who is president Russia now?',
          questionType: questionType.check,
          answers: [
            'Putin',
            'Navalny',
            'Trump'
          ],
          trueAnswers: ['Putin']
        },
        {
          text: 'current year?',
          questionType: questionType.text,
          trueAnswer: 2021
        }
      ]
    }
  },
  methods: {
    removeQuestion: function (questionIndex) {
      var newQuestions = [];
      var currentQuestions = this.testData.questions;
      for (var i = 0; i < currentQuestions.length; i++) {
        if (i !== questionIndex) {
          newQuestions.push(currentQuestions[i]);
        }
      }
      this.testData.questions = newQuestions;
    },
    editQuestion: function (questionIndex) {
      this.modalQuestion = Object.create(this.testData.questions[questionIndex]);
      this.modalQuestion.index = questionIndex;
      var modal = new bootstrap.Modal(document.getElementById('exampleModal'));
      modal.show();
    },
    addQuestion: function () {
      this.modalQuestion = JSON.parse(JSON.stringify(this.emptyModalQuestion));
      var modal = new bootstrap.Modal(document.getElementById('exampleModal'));
      modal.show();
    },
    addModalAnswer: function () {
      this.modalQuestion.answers.push('')
    },
    saveNewAnswer: function () {
      this.modalQuestion.answers.push(this.newAnswer);
      this.isAddNewAnswer = false;
      this.newAnswer = '';
    },
    saveQuestion: function () {
      if (this.modalQuestion.index == -1) {
        this.testData.questions.push(JSON.parse(JSON.stringify(this.modalQuestion)));
      } else {
        this.testData.questions[this.modalQuestion.index] = JSON.parse(JSON.stringify(this.modalQuestion));
      }
      var modal = new bootstrap.Modal(document.getElementById('exampleModal'));
      modal.hide();
    }
  }
})