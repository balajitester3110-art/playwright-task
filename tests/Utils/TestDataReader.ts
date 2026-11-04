import * as fs from 'fs';
import * as path from 'path';
export class TestDataReader {
    // Read JSON test data file
    static readJsonFile<T>(filePath: string): T {
        const absolutePath = path.resolve(filePath);
        if (!fs.existsSync(absolutePath)) {
            throw new Error(`Test data file not found: ${absolutePath}`);
        }
        const fileContent = fs.readFileSync(
            absolutePath,
            'utf-8'
        );
        return JSON.parse(fileContent) as T;
    }
    // Get a specific property from JSON data
    static getProperty<T>(
        data: T,
        property: keyof T
    ): T[keyof T] {
        return data[property];
    }
}
