import * as React from "react";
import { Box, Color, useInput, AppContext } from "ink";

export const Editor: React.FC<{
    fileContent: string,
    linesShown: number,
}> = props => {
	const {exit} = React.useContext(AppContext);
    const [startingLine, setStartingLine] = React.useState(0);
    const lines = props.fileContent.split('\n').slice(startingLine, startingLine + props.linesShown);
    const totalLines = props.fileContent.split('\n').length;

    useInput((input, key) => {
        // console.log("!!")
		if (input === 'q') {
			exit();
		}
        setStartingLine(startingLine + 1);
        // if (key.downArrow) {
        //    setStartingLine(startingLine + props.linesShown + 1 > totalLines - 1 ? startingLine : startingLine + 1);
        // } else if (key.upArrow) {
        //     setStartingLine(startingLine - 1 < 0 ? startingLine : startingLine - 1);
        // }
    })

    return (
        <>
        "{startingLine}"
            {
                lines.map((line, no) => (
                    <Box width="100%" key={no}>
                        <Box>
                            <Color grey>
                                { no }:{'  '}
                            </Color>
                        </Box>
                        <Box flexGrow={1}>
                            { line }
                        </Box>
                    </Box>
                ))
            }
        </>
    );
}