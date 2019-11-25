import * as React from "react";
import * as fs from "fs-extra";
import * as path from "path";
import { Editor } from "./Editor";

export const App: React.FC<{}> = props => {
    const [_, p, fileName] = process.argv;
    const cwd = process.cwd();
    const [content, setContent] = React.useState('');
    React.useEffect(() => {
        (async () => {
            const c = await fs.readFile(path.join(cwd, fileName), {encoding: 'utf-8'});
            setContent(c);
        })();
    }, []);

    return (
        <Editor fileContent={content} linesShown={10} />
    );
};
