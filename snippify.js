// TODO: Add branching inputs for sending snippets to separate files; maybe branch off for full and partial snippets 
const fs = require('fs');
const prompts = require('prompts');

(async () => {
    const response = await prompts([
        {
            type: 'text',
            name: 'snippetName',
            message: 'Name for snippet',
            validate: text => text !== ""
        }, 
        {
            type: 'text',
            name: 'prefix',
            message: 'Prefix for snippet',
            validate: text => text !== ""
        }, 
        {
            type: 'text',
            name: 'description',
            message: 'Description for snippet',
            validate: text => text !== ""
        }
    ]);

    const { snippetName, prefix, description } = response
    if (snippetName && prefix && description) { 
        processSnippet(snippetName, prefix, description);
    }
})();

function processSnippet(snippetName, prefix, description) {
    const filePath = 'snippet.txt';

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) throw err;
        const snippet = snippify(prefix, description, data);
        addSnippetToList(snippetName, snippet);
    });
}

function snippify(prefix, description, codeBlock) {
    // Split the code block into lines
    const lines = codeBlock.split("\n");

    // Convert tabs to "\t" in each line
    const convertedLines = lines.map(
        line => line
            .split(/\t/g).join("\t")
            .split("    ").join("\t")
            .split("  ").join("\t")
    );

    const snippet = {
        prefix,
        description,
        body: convertedLines
    };

    return snippet;
}

function addSnippetToList(snippetName, newSnippet) {
    const snippetFile = 'snippets/snippets.code-snippets';
    fs.readFile(snippetFile, 'utf8', (err, data) => {
        if (err) throw err;
        
        // read in existing snippets
        let currentSnippets = JSON.parse(data);

        // add new snippet
        currentSnippets[snippetName] = newSnippet

        const updatedSnippets = JSON.stringify(currentSnippets, null, 2);

        // write to file
        fs.writeFile(snippetFile, updatedSnippets, 'utf8', (err) => {
            if (err) throw err;
        });
    });
}