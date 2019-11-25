import * as React from "react";
import * as fs from "fs-extra";
import * as path from "path";
import { Editor } from "./Editor";

export const App: React.FC<{}> = props => {
    const [_, p, fileName] = process.argv;
    const cwd = process.cwd();
    const [content, setContent] = React.useState('');
    const filePath = path.join(cwd, fileName || '');

    if (!fileName) {
        return <>You must specify a filename relative to your current path to open it.</>;
    }

    if (!fs.existsSync(filePath)) {
        return <>The file that you specified does not exist.</>;
    }

    React.useEffect(() => {
        (async () => {
            const c = await fs.readFile(filePath, {encoding: 'utf-8'});
            setContent(c);
        })();
    }, []);

    return (
        <Editor fileContent={content} fileName={filePath} />
    );
};
