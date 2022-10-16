const ChooseLetter = ({selectedLetter, setSelectedLetter}) => {
    const selectedClass = 'h-10 w-14 rounded-full' +
        'shadow-neutral-600 drop-shadow-xl bg-fuchsia-300';
    const notSelectedClass = 'h-10 w-14 rounded-full' +
        'shadow-neutral-600 drop-shadow-xl bg-white';

    const handleClick = (event) => {
        setSelectedLetter(event.target.value);
    };

    return (
        <div>
            <button
                className={selectedLetter === 'X'
                    ? selectedClass
                    : notSelectedClass}
                onClick={handleClick}
                value='X'>
                X
            </button>
            <button
                className={selectedLetter === 'O'
                    ? selectedClass
                    : notSelectedClass}
                onClick={handleClick}
                value='O'>
                O
            </button>
        </div>
    );
};

export default ChooseLetter;
