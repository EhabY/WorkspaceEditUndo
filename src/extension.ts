import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand('workspaceEditTest.createFile', async () => {
		const folders = vscode.workspace.workspaceFolders;
		if(folders === undefined || folders.length === 0) {
			return;
		}

		const file1 = vscode.Uri.joinPath(folders[0].uri, "file1.txt");
		const we = new vscode.WorkspaceEdit();
		we.createFile(file1, { ignoreIfExists: true, contents: new TextEncoder().encode("ABC1") });
		await vscode.workspace.applyEdit(we);
	});

	context.subscriptions.push(disposable);

	let disposable2 = vscode.commands.registerCommand('workspaceEditTest.deleteFile', async () => {
		const folders = vscode.workspace.workspaceFolders;
		if(folders === undefined || folders.length === 0) {
			return;
		}

		const file1 = vscode.Uri.joinPath(folders[0].uri, "file1.txt");
		const we = new vscode.WorkspaceEdit();
		we.deleteFile(file1, { ignoreIfNotExists: true });
		await vscode.workspace.applyEdit(we);
	});

	context.subscriptions.push(disposable2);
}

// This method is called when your extension is deactivated
export function deactivate() {}
