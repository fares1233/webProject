import { useQuiz } from "../context/QuizContext";

function NextQuestion() {
    const { dispatch, answer, numQuestions, index } = useQuiz();

    if (answer === null) return;
    if (index < numQuestions - 1)
        return (
            <div>
                <button
                    className="btn btn-ui"
                    onClick={() => dispatch({ type: "nextQuestion" })}
                >
                    next
                </button>
            </div>
        );

    if (index === numQuestions - 1)
        return (
            <div>
                <button
                    className="btn btn-ui"
                    onClick={() => dispatch({ type: "finish" })}
                >
                    Finish
                </button>
            </div>
        );
}

export default NextQuestion;
