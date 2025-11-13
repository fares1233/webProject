import { useQuiz } from "../context/QuizContext";

function Progress() {
    const { numQuestios, index, points, maxPossiblePoints, answer } = useQuiz();
    return (
        <header className="progress">
            <progress max={numQuestios} value={index + Number(answer != null) } />

            <p>
                Question <strong>{index + 1}</strong> / {numQuestios}
            </p>
            <p>
                points <strong>{points}</strong> / {maxPossiblePoints}
            </p>
        </header>
    );
}

export default Progress;
