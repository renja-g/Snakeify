import * as assert from 'assert';
import * as vscode from 'vscode';
import { snakeify } from '../extension';

suite('Extension Test Suite', () => {
    vscode.window.showInformationMessage('Start all tests.');

    test('snakeify function converts camel case to snake case', () => {
        const input = 'helloWorld';
        const expectedOutput = 'hello_world';
        const actualOutput = snakeify(input);
        assert.strictEqual(actualOutput, expectedOutput);
    });

    test('snakeify function handles empty string', () => {
        const input = '';
        const expectedOutput = '';
        const actualOutput = snakeify(input);
        assert.strictEqual(actualOutput, expectedOutput);
    });

    test('snakeify function handles single word', () => {
        const input = 'hello';
        const expectedOutput = 'hello';
        const actualOutput = snakeify(input);
        assert.strictEqual(actualOutput, expectedOutput);
    });

    test('snakeify function handles snake case', () => {
        const input = 'hello_world';
        const expectedOutput = 'hello_world';
        const actualOutput = snakeify(input);
        assert.strictEqual(actualOutput, expectedOutput);
    });
});
