import * as React from "react";
import {Box, Color, useInput, AppContext, Text} from "ink";

export const Editor: React.FC<{
  fileContent: string,
  fileName: string,
}> = props => {
  const {exit} = React.useContext(AppContext);

  const [startingLine, setStartingLine] = React.useState(0);
  const [linesShown, setLinesShown] = React.useState(10);

  const lines = props.fileContent.split('\n').slice(startingLine, startingLine + linesShown);
  const totalLines = props.fileContent.split('\n').length;

  useInput((input, key) => {
    if (input === 'q' || key.return || key.escape) {
      exit();
    }

    if (input === '[1;2B') {
      setLinesShown(linesShown => linesShown + 1);
    } else if (input === "[1;2A") {
      setLinesShown(linesShown => Math.max(linesShown - 1, 1));
    } else if (key.downArrow) {
      setStartingLine(startingLine => Math.min(startingLine + 1, totalLines - linesShown));
    } else if (key.upArrow) {
      setStartingLine(startingLine => Math.max(startingLine - 1, 0));
    }
  });

  return (
    <>
      <Color bgWhiteBright black>
        { props.fileName }
        :
        { startingLine }-{ startingLine + linesShown }/{ totalLines }
      </Color>
      {
        lines.map((line, no) => (
          <Box width="100%" key={no}>
            <Box>
              <Color grey>
                { no + startingLine }:{'  '}
              </Color>
            </Box>
            <Box flexGrow={1}>
              { line }
            </Box>
          </Box>
        ))
      }
      <Color bgWhiteBright black>
        Press [▼/▲] to scroll, press [SHIFT]+[▼/▲] to change view size.
      </Color>
    </>
  );
};
