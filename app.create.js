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
      answers: []
    },
    newAnswer: '',
    isAddNewAnswer: false,
    modalQuestion: {
      index: -1,
      text: '',
      answers: []
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
          trueAnswer: 'baiden'
        },
        {
          text: 'who is president Russia now?',
          questionType: questionType.check,
          answers: [
            'Putin',
            'Navalny',
            'Trump'
          ],
          trueAnswer: ['Putin']
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
      this.modalQuestion = this.testData.questions[questionIndex];
      this.modalQuestion.index = questionIndex;
      var modal = new bootstrap.Modal(document.getElementById('exampleModal'));
      modal.show();
    },
    addQuestion: function () {
      this.modalQuestion = this.emptyModalQuestion;
      var modal = new bootstrap.Modal(document.getElementById('exampleModal'));
      modal.show();
    },
    addModalAnswer: function () {
      this.modalQuestion.answers.push({
        text: '',
        good: false,
      })
    },
    saveNewAnswer: function () {
      this.modalQuestion.answers.push({
        text: this.newAnswer,
        good: false
      });
      this.isAddNewAnswer = false;
      this.newAnswer = '';
    },
    saveNewQuestion: function () {
      var modal = new bootstrap.Modal(document.getElementById('exampleModal'));
      this.testData.questions.push(this.modalQuestion);
      modal.hide();
    }
  }
})