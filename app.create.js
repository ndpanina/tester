var app = new Vue({
  el: '#app',
  data: {
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
          isSingeAnswer: true,
          answers: [
            {text: 'baiden', good: true},
            {text: 'trump', good: false}
          ]
        },
        {
          text: 'who is president Russia now?',
          isSingeAnswer: false,
          answers: [
            {text: 'Putin', good: true},
            {text: 'Navalny', good: false}
          ]
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
    addQuestion: function () {
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

      this.testData.questions.push(this.modalQuestion);
      var modal = new bootstrap.Modal(document.getElementById('exampleModal'));
      // modal.dispose();
      modal.hide();
      this.modalQuestion = this.emptyModalQuestion;
    }
  }
})