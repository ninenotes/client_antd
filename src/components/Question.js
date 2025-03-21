import React, { useState } from 'react';
import { Button, Card, Space } from 'antd';

export default function App() {
  const questions = [
    {
      questionText: 'Ant Design คืออะไร?',
      answerOptions: [
        { answerText: 'New York', isCorrect: false },
        { answerText: 'London', isCorrect: false },
        { answerText: 'UI Framework', isCorrect: true },
        { answerText: 'Dublin', isCorrect: false },
      ],
    },
    {
      questionText: 'ประโยชน์ของ  Ant Design? ',
      answerOptions: [
        { answerText: 'เน็ตสเถียร', isCorrect: false },
        { answerText: ' uiที่สวยงาม', isCorrect: true },
        { answerText: 'รสชาติดี', isCorrect: false },
        { answerText: 'ป้องกันhackได้', isCorrect: false },
      ],
    },
    {
      questionText: 'The iPhone was created by which company?',
      answerOptions: [
        { answerText: 'Apple', isCorrect: true },
        { answerText: 'Intel', isCorrect: false },
        { answerText: 'Amazon', isCorrect: false },
        { answerText: 'Microsoft', isCorrect: false },
      ],
    },
    {
      questionText: 'How many Harry Potter books are there?',
      answerOptions: [
        { answerText: '1', isCorrect: false },
        { answerText: '4', isCorrect: false },
        { answerText: '6', isCorrect: false },
        { answerText: '7', isCorrect: true },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setShowScore(false);
    setScore(0);
  };

  return (
    <div className="app" style={{ maxWidth: '600px', margin: 'auto' }}>
      {showScore ? (
        <Card className="score-section" title="Your Score" variant="outlined">
          <h2>
            You scored {score} out of {questions.length}
          </h2>
          <Button onClick={handleRestart}>
            Start Again
          </Button>
        </Card>
        
      ) : (
        <>
          <Card className="question-section" title={`Question ${currentQuestion + 1}`} variant="outlined">
            <p>{questions[currentQuestion].questionText}</p>
          </Card>
          <div className="answer-section" style={{ marginTop: '20px' }}>
            <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
              {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                <Button id="button_Q"
                  key={index}
                  type="primary"
                  size="large"
                  onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
                >
                  {answerOption.answerText}
                </Button>
              ))}
            </Space>
          </div>
        </>
      )}
    </div>
  );
}
