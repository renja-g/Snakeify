import * as vscode from 'vscode';

export function snakeify(text: string): string {
    return text.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase();
}

export function activate(context: vscode.ExtensionContext) {
    console.log('Congratulations, your extension "snakeify-snake-case-converter" is now active!');

    let disposable = vscode.commands.registerCommand('snakeify-snake-case-converter.snakeify', () => {
        let editor = vscode.window.activeTextEditor;
        if (editor) {
            let document = editor.document;
            let selections = editor.selections;

            editor.edit(editBuilder => {
                selections.forEach(selection => {
                    let wordRange = document.getWordRangeAtPosition(selection.active);
                    if (wordRange) {
                        let word = document.getText(wordRange);
                        let newText = snakeify(word);
                        editBuilder.replace(wordRange, newText);
                    } else {
                        vscode.window.showErrorMessage('No variable found at cursor position.');
                    }
                });
            });
        }
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}
