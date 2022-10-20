const ChooseLetter = ({selectedLetter, setSelectedLetter, primaryColor}) => {
    const selectedClass = 'h-10 w-14 rounded-full' +
        'shadow-neutral-600 drop-shadow-xl';
    const notSelectedClass = 'h-10 w-14 rounded-full' +
        'shadow-neutral-600 drop-shadow-xl';

    const handleClick = (event) => {
        setSelectedLetter(event.target.value);
    };

    return (
        <div style={{display: 'inline-block'}}>
            <button
                className={selectedLetter === 'X'
                    ? selectedClass
                    : notSelectedClass}
                style={
                    selectedLetter === 'X'
                        ? {backgroundColor: primaryColor}
                        : {backgroundColor: '#FFF'}
                }
                onClick={handleClick}
                value='X'>
                X
            </button>
            <button
                className={selectedLetter === 'O'
                    ? selectedClass
                    : notSelectedClass}
                style={
                    selectedLetter === 'O'
                        ? {backgroundColor: primaryColor}
                        : {backgroundColor: '#FFF'}
                }
                onClick={handleClick}
                value='O'>
                O
            </button>
        </div>
    );
};

export default ChooseLetter;
