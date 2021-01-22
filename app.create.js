var app = new Vue({
  el: '#app',
  data: {
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
    removeQuestion: function(questionIndex) {
      var newQuestions = [];
      var currentQuestions = this.testData.questions;
      for (var i = 0; i < currentQuestions.length; i++) {
        if (i !== questionIndex) {
          newQuestions.push(currentQuestions[i]);
        }
      }
      this.testData.questions = newQuestions;
    }
  }
})