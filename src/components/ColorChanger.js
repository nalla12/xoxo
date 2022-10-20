import { ColorpickerDialog } from '@zendeskgarden/react-colorpickers';

const ColorChanger = ({primaryColor, setPrimaryColor}) => {
    const handleColorChange = (color) => {
        setPrimaryColor(color.hex);
    };

    return (
        <div style={{display: 'inline-block'}}>
            <ColorpickerDialog
                buttonProps={{
                    'aria-label': 'choose your favorite color',
                }}
                onChange={handleColorChange}
                color={primaryColor}
            />
        </div>
    );
};

export default ColorChanger;
