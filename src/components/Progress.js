function Progress({ numQuestios, index, points, maxPossiblePoints, answer }) {
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
