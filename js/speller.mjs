export default {
	check,
	lookup,
};

import fs from 'fs';
import { promisify } from 'util';

const readFile = promisify(fs.readFile);

let elements;

async function loadPeriodicTable() {
    const data = await readFile('/home/achchisol/frontend-masters/workshop-periodic-table/periodic-table.json');
    elements = JSON.parse(data);
}

await loadPeriodicTable();

// create periodic table trie
var trie = {};
for (let element of elements) {
	let symbol = element.symbol.toLowerCase();
	let node = trie;
	for (let char of symbol) {
		node[char] = node[char] || {};
		node = node[char];
	}
	node[""] = element;
}
console.log(trie['h']);

function check(inputWord) {
	// TODO: determine if `inputWord` can be spelled
	// with periodic table symbols; return array with
	// them if so (empty array otherwise)

	return [];
}

function lookup(elementSymbol) {
	// TODO: return the element entry based on specified
	// symbol (case-insensitive)

	return {};
}
